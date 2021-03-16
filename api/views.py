from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import ExperienceSerializer, EducationSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/lefttree',
        '/api/righttree'
    ]
    return Response(routes)

# Create your views here.


@api_view(['GET'])
def getTree(request):
    company = "Microsoft"
    title = "Product Manager"
    experiences = Experience.objects.all().filter(company=company, title=title)
    data = {}
    for direction in ("left", "right"):
        if direction == "left":
            data["left"] = {
                "name": title,
                "company": company,
                "parent": "null",
                "children": []
            }
            for i in range(len(experiences)):
                e = experiences[i]
                parent_node = data["left"]
                parent_name = title
                profile_id = e.profile.id
                current_level = e.level
                is_first_child = True
                while current_level > 1:
                    child = Experience.objects.all().filter(
                        profile__id=profile_id, level=current_level-1)

                    if len(child) == 0:  # then previous level is an education instead
                        child = Education.objects.all().filter(
                            profile__id=profile_id, level=current_level-1)[0]
                        serializer = EducationSerializer(child)
                        child_title = serializer.data.pop("degree")
                    else:
                        child = child[0]
                        serializer = ExperienceSerializer(child)
                        child_title = serializer.data.pop("title")

                    if len(child_title) > 33:
                        name = child_title[:33] + "..."
                    else: 
                        name = child_title

                    child = {"name": name,
                             "parent_name": parent_name, "children": []}
                    child["attributes"]= serializer.data
                    parent_node["children"].append(child)
                    if is_first_child:
                        parent_node = parent_node["children"][i]
                    else:
                        parent_node = parent_node["children"][0]
                    parent_name = child_title
                    current_level -= 1
                    is_first_child = False

        if direction == "right":
            data["right"] = {
                "name": title,
                "company": company,
                "parent": "null",
                "children": []
            }
            for i in range(len(experiences)):
                e = experiences[i]
                parent_node = data["right"]
                parent_name = title
                profile_id = e.profile.id
                current_level = e.level
                is_first_child = True

                max_experience_level = Experience.objects.all().filter(
                    profile__id=profile_id).latest('level').level
                max_education_level = Education.objects.all().filter(
                    profile__id=profile_id).latest('level').level
                max_level = max(max_experience_level, max_education_level)

                if current_level == max_level:
                    parent_node["children"].append(
                        {"name": "present", "parent_name": parent_name, "children": [], "attributes": []})
                else:
                    while current_level < max_level:
                        child = Experience.objects.all().filter(
                            profile__id=profile_id, level=current_level + 1)

                        if len(child) == 0:  # then previous level is an education instead
                            child = Education.objects.all().filter(
                                profile__id=profile_id, level=current_level + 1)[0]
                            serializer = EducationSerializer(child)
                            child_title = serializer.data.pop("degree")
                        else:
                            child = child[0]
                            serializer = ExperienceSerializer(child)
                            child_title = serializer.data.pop("title")

                        if len(child_title) > 33:
                            name = child_title[:33] + "..."
                        else: 
                            name = child_title

                        child = {"name": name,
                                "parent_name": parent_name, "children": []}
                        child["attributes"] = serializer.data
                        parent_node["children"].append(child)
                        if is_first_child:
                            parent_node = parent_node["children"][i]
                        else:
                            parent_node = parent_node["children"][0]
                        parent_name = child_title
                        current_level += 1
                        is_first_child = False
    return Response(data)
