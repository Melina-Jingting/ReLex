from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import ExperienceSerializer, EducationSerializer
from .utils import convert_to_case_insensitive_query
from django.db.models import Count, Min
from .db_helper import *
import pandas as pd


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/lefttree',
        '/api/righttree'
    ]
    return Response(routes)

# Create your views here.


@api_view(['GET', 'POST'])
def get_industries(request):
    if not request.data.get('centralNode'):
        return Response({
            "left": {
                "title": 'create your map!',
                "type": "central-node"
            },
            "right": {
                "title": 'create your map!',
                "type": "central-node"
            },
            "central_node_ids": []
        }
        )
    central_node_type = request.data.get('centralNodeType')
    central_node_query = request.data.get('centralNode')

    past_experiences = request.data.get('experienceFilters')
    educations = request.data.get('educationFilters')

    case_insensitive_central_node_query = convert_to_case_insensitive_query(
        central_node_query)

    # 1. First, we get the central nodes
    # and retrieve all the profiles that hold this experience or education
    if central_node_type == "experience":
        central_nodes_unfiltered = Experience.objects.all().filter(
            **case_insensitive_central_node_query)
    if central_node_type == "education":
        central_nodes_unfiltered = Education.objects.all().filter(
            **case_insensitive_central_node_query)

    unfiltered_profile_ids = central_nodes_unfiltered.values_list("profile_id")
    profiles = Profile.objects.all().filter(id__in=unfiltered_profile_ids)

    # 2. Then, if specified by user, we filter these profiles further
    # based on whether they hold the experiences or educations
    # in the extra filters past_experiences or educations
    for experience_filter in past_experiences:
        case_insensitive_experience_filter_query = convert_to_case_insensitive_query(
            experience_filter)
        past_experience_nodes = Experience.objects.all().filter(
            **case_insensitive_experience_filter_query)
        profile_ids_filter = past_experience_nodes.values_list("profile_id")
        profiles = profiles.filter(id__in=profile_ids_filter)
    for education_filter in educations:
        case_insensitive_education_filter_query = convert_to_case_insensitive_query(
            education_filter)
        past_education_nodes = Education.objects.all().filter(
            **case_insensitive_education_filter_query)
        profile_ids_filter = past_education_nodes.values_list("profile_id")
        profiles = profiles.filter(id__in=profile_ids_filter)

    # 3. Then we filter the central nodes retrieved in step 1 using the
    # filtered profile_ids retrieved in step 2
    # and we set up the central node name and attributes.
    profile_ids = profiles.values_list("id", flat=True)
    central_nodes = central_nodes_unfiltered.filter(
        profile__in=profile_ids)

    # print(list(profile_ids))
    # this removes instances of duplicates on the same profile
    unique_profile_filter = (
        central_nodes.values('profile_id')
        .order_by()
        .annotate(min_id=Min('id'))
    ).values_list('min_id', flat=True)
    central_nodes = central_nodes.filter(id__in=unique_profile_filter)

    central_node_title = ""
    central_node_subtitle = ""
    if central_node_type == "experience":
        if 'title' in central_node_query:
            central_node_title = central_node_query['title']
        if 'company_name' in central_node_query:
            central_node_subtitle = central_node_query['company_name']

    if central_node_type == "education":
        if 'field' in central_node_query:
            central_node_title = central_node_query['field']
        if 'university' in central_node_query:
            central_node_subtitle = central_node_query['university']

    # print(list(unique_profile_filter))

    left_tree = get_industries_count(central_node_type=central_node_type,
                                     profile_id_tuple=tuple(profile_ids),
                                     direction='<',
                                     central_node_query=convert_dict_to_sql(central_node_query, 'cn'))
    right_tree = get_industries_count(central_node_type=central_node_type,
                                      profile_id_tuple=tuple(profile_ids),
                                      direction='>',
                                      central_node_query=convert_dict_to_sql(central_node_query, 'cn'))

    data = {}
    data["left"] = {
        "title": central_node_title,
        "subtitle": central_node_subtitle,
        "amount": len(profile_ids),
        "parent": "null",
        "children": left_tree,
        "type": "central-node central-node-" + central_node_type
    }

    data["right"] = {
        "title": central_node_title,
        "subtitle": central_node_subtitle,
        "amount": len(profile_ids),
        "parent": "null",
        "children": right_tree,
        "type": "central-node central-node-" + central_node_type
    }

    data["central_node_ids"] = list(
        central_nodes.values_list('id', flat=True))
    return Response(data)


@api_view(['GET', 'POST'])
def get_companies_in_industry(request):
    total_profiles = request.data.get('totalProfiles')
    experience_id_tuple = '(' + ','.join([str(x)
                                          for x in request.data.get('experienceIDs')]) + ')'
    companies = get_companies_in_industry_count(experience_id_tuple=experience_id_tuple,
                                                total_profiles=total_profiles)

    return Response(companies)


@api_view(['GET', 'POST'])
def get_career_paths(request):
    print(request.data)
    central_node_type = request.data.get('centralNodeType')
    if central_node_type == 'experience':
        central_node_query = {
            'title': request.data.get('centralNodeTitle'),
            'company_name': request.data.get('centralNodeSubtitle')
        }
    elif central_node_type == 'education':
        central_node_query = {
            'field': request.data.get('centralNodeTitle'),
            'university': request.data.get('centralNodeSubtitle'),
        }

    direction = request.data.get('direction')
    profile_id_tuple = '(' + ','.join([str(x)
                                       for x in request.data.get('profileIDs')]) + ')'
    paths_df = get_experiences_and_educations(direction=direction,
                                              central_node_type=central_node_type,
                                              central_node_query=convert_dict_to_sql(
                                                  central_node_query, 'cn'),
                                              profile_id_tuple=profile_id_tuple).sort_values('profile_id')
    if direction == 'left':
        paths_df = paths_df.sort_values(by='level', ascending=False)
    if direction == 'right':
        paths_df = paths_df.sort_values(by='level')

    data = []
    for index, profile_id in enumerate(paths_df.profile_id.unique()):
        profile_path_df = paths_df[paths_df['profile_id'] == profile_id]
        data.append(profile_path_df.iloc[0].to_dict())
        parent = data[index]
        for row in range(1, len(profile_path_df)):
            parent['children'] = []
            parent['children'].append(profile_path_df.iloc[row].to_dict())
            parent = parent['children'][0]

    return Response(data)


@api_view(['GET', 'POST'])
def get_before_central_node_stats(request):
    print(request.data)
    request_type = request.data.get('type')
    central_node_type = request.data.get('centralNodeType')
    node_ids = request.data.get('centralNodeIDs')

    if node_ids == None:
        return Response({})

    central_node_id_tuple = '(' + ','.join([str(x)
                                            for x in node_ids]) + ')'
    skills = get_skills_count(central_node_type=central_node_type,
                              central_node_id_tuple=central_node_id_tuple)
    certifications = get_certifications_count(central_node_type=central_node_type,
                                              central_node_id_tuple=central_node_id_tuple,
                                              direction="<")
    companies = get_companies_count(central_node_type=central_node_type,
                                    central_node_id_tuple=central_node_id_tuple,
                                    direction="<")
    roles = get_roles_count(central_node_type=central_node_type,
                            central_node_id_tuple=central_node_id_tuple,
                            direction="<")
    # elif request_type == 'sector':
    #     result = get_sector_count(central_node_type=central_node_type,
    #                                 central_node_id_tuple=central_node_id_tuple,
    #                                 direction=">")
    education = get_education_count(central_node_type=central_node_type,
                                     central_node_id_tuple=central_node_id_tuple,
                                     direction="<")


    return Response({'skills': skills,
                     'certifications': certifications,
                     'companies': companies,
                     'roles': roles,
                     'education': education})

@api_view(['GET', 'POST'])
def get_after_central_node_stats(request):
    print(request.data)
    request_type = request.data.get('type')
    central_node_type = request.data.get('centralNodeType')
    node_ids = request.data.get('centralNodeIDs')

    if node_ids == None:
        return Response({})

    central_node_id_tuple = '(' + ','.join([str(x)
                                            for x in node_ids]) + ')'
    companies = get_companies_count(central_node_type=central_node_type,
                                    central_node_id_tuple=central_node_id_tuple,
                                    direction=">")
    roles = get_roles_count(central_node_type=central_node_type,
                            central_node_id_tuple=central_node_id_tuple,
                            direction=">")
    return Response({'companies': companies,
                     'roles': roles,})