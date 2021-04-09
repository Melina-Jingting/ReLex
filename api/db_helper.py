
from django.db import connection
from .utils import *
import pandas as pd


def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]


def get_industries_count(central_node_type, profile_id_tuple, direction, central_node_query):

    number_of_profiles = len(profile_id_tuple)
    # filter_query = convert_dict_to_sql(central_node_query, 'cn')

    query = """SELECT c.industry as title, 
                    CONCAT(TO_CHAR((CARDINALITY(ARRAY_AGG(DISTINCT p.id))/{number_of_profiles}::float)*100,'FM999999990.00'),'%')
                        as amount, 
                    array_agg(DISTINCT ex.id) as experiences_list,
                    'industry' as type
                FROM api_company c,
                    api_experience ex,
                    api_profile p,
                    api_{central_node_type} cn
                WHERE p.id = ex.profile_id
                    AND p.id = cn.profile_id
                    AND p.id IN {profile_id_tuple}
                    AND ex.company_id = c.id
                    AND ex.level {direction} cn.level
                    AND c.industry != 'unclassified'
                    {central_node_query}
                GROUP BY c.industry
                ORDER BY amount DESC
                LIMIT 10
    """.format(number_of_profiles=number_of_profiles,
               central_node_type=central_node_type,
               profile_id_tuple=profile_id_tuple,
               direction=direction,
               central_node_query=central_node_query)
    with connection.cursor() as cursor:
        cursor.execute(query)
        result = dictfetchall(cursor)
    return result


def get_companies_in_industry_count(experience_id_tuple, total_profiles):
    query = """SELECT ex.company_name as title, 
                        CONCAT(TO_CHAR((CARDINALITY(ARRAY_AGG(DISTINCT p.id))/{total_profiles}::float)*100,'FM999999990.00'),'%')
                        as amount, 
                        'company' as type,
                        array_agg(DISTINCT p.id) as profiles_list
                FROM api_experience ex, 
                        api_company c,
                        api_profile p
                WHERE ex.profile_id = p.id
                AND ex.company_id = c.id
                AND ex.id IN {experience_id_tuple}
                GROUP BY ex.company_name
                ORDER BY amount DESC
                LIMIT 10
    """.format(total_profiles=total_profiles, experience_id_tuple=experience_id_tuple)

    with connection.cursor() as cursor:
        cursor.execute(query)
        result = dictfetchall(cursor)
    return result

# def get_educations_in_path(direction, central_node_type, central_node_query, profile_id_tuple):
#     if direction == 'left':
#         direction = '<'
#     elif direction == 'right':
#         direction = '>'

#     query = """SELECT ed.field as title,
#                     ed.university as subtitle,
#                     ed.level as level,
#                     p.id as profile,
#                     'education' as type
#                 FROM api_education ed,
#                     api_profile p,
#                     api_{central_node_type} cn
#                 WHERE p.id = ed.profile_id
#                     AND p.id = cn.profile_id
#                     AND p.id IN {profile_id_tuple}
#                     AND ed.level {direction} cn.level
#                     {central_node_query}
#     """.format(central_node_type=central_node_type,
#                 profile_id_tuple=profile_id_tuple,
#                 direction=direction,
#                 central_node_query=central_node_query)
#     result = pd.read_sql(query,connection)
#     return result


def get_experiences_and_educations(direction, central_node_type, central_node_query, profile_id_tuple):
    if direction == 'left':
        direction = '<'
    elif direction == 'right':
        direction = '>'

    # 	COALESCE(DATE_PART('year',AGE(ex.to_date,ex.from_date)),
    #             DATE_PART('year',AGE(NOW(),ex.from_date))) as duration_year,
    # COALESCE(DATE_PART('month',AGE(ex.to_date,ex.from_date)),
    #             DATE_PART('year',AGE(NOW(),ex.from_date))) as duration_month,

    query = """SELECT ex.title as title,
                    ex.company_name as subtitle,
                    ex.level as level,
                    TO_CHAR(ex.from_date,'Mon YYYY') as from_date,
                    TO_CHAR(ex.to_date, 'Mon YYYY') as to_date,
                    p.id as profile_id,
                    'experience' as type
                FROM api_experience ex,
                    api_profile p,
                    api_{central_node_type} cn
                WHERE p.id = ex.profile_id
                    AND p.id = cn.profile_id
                    AND p.id IN {profile_id_tuple}
                    AND ex.level {direction} cn.level
                    {central_node_query}
                UNION
                SELECT ed.field as title,
                    ed.university as subtitle,
                    ed.level as level,
                    TO_CHAR(ed.from_date,'Mon YYYY') as from_date,
                    TO_CHAR(ed.to_date, 'Mon YYYY') as to_date,
                    p.id as profile,
                    'education' as type
                FROM api_education ed,
                    api_profile p,
                    api_{central_node_type} cn
                WHERE p.id = ed.profile_id
                    AND p.id = cn.profile_id
                    AND p.id IN {profile_id_tuple}
                    AND ed.level {direction} cn.level
                    {central_node_query}
    """.format(central_node_type=central_node_type,
               profile_id_tuple=profile_id_tuple,
               direction=direction,
               central_node_query=central_node_query)
    result = pd.read_sql(query, connection)
    result['to_date'] = result['to_date'].fillna('Present')
    return result


def get_skills_count(central_node_type, central_node_id_tuple):
    query = """SELECT s.title as labels, COUNT(s) as amount
                FROM api_skill s, 
                api_profile p,
                api_{central_node_type} cn
                WHERE cn.profile_id = p.id
                AND s.profile_id = p.id
                AND cn.id IN {central_node_id_tuple}
                GROUP BY s.title 
                ORDER BY amount DESC
                LIMIT 10
    """.format(central_node_type=central_node_type,
               central_node_id_tuple=central_node_id_tuple)
    result = pd.read_sql(query, connection)
    result = {"labels": result.labels.values.tolist(
    ), "data": result.amount.values.tolist()}
    return result


def get_certifications_count(central_node_type, central_node_id_tuple, direction):
    query = """SELECT c.title as labels, COUNT(c) as amount
                FROM api_certification c, 
                api_profile p,
                api_{central_node_type} cn
                WHERE cn.profile_id = p.id
                AND c.profile_id = p.id
                AND cn.id IN {central_node_id_tuple}
                GROUP BY c.title 
                ORDER BY amount DESC
                LIMIT 10
    """.format(central_node_type=central_node_type,
               central_node_id_tuple=central_node_id_tuple)
    result = pd.read_sql(query, connection)
    result = {"labels": result.labels.values.tolist(
    ), "data": result.amount.values.tolist()}
    return result


def get_companies_count(central_node_type,
                        central_node_id_tuple,
                        direction):
    query = """SELECT ex.company_name as labels, COUNT(ex.company_name) as amount
                FROM api_experience ex, 
                api_profile p,
                api_{central_node_type} cn
                WHERE ex.profile_id = p.id
                AND cn.profile_id = p.id
                AND ex.level {direction} cn.level 
                AND cn.id IN {central_node_id_tuple}
                GROUP BY ex.company_name
                ORDER BY amount DESC
                LIMIT 10
    """.format(central_node_type=central_node_type,
               central_node_id_tuple=central_node_id_tuple,
               direction=direction)
    result = pd.read_sql(query, connection)
    result = {"labels": result.labels.values.tolist(
    ), "data": result.amount.values.tolist()}
    return result


def get_roles_count(central_node_type,
                    central_node_id_tuple,
                    direction):
    query = """SELECT ex.title as labels, COUNT(ex.title) as amount
                FROM api_experience ex, 
                api_profile p,
                api_{central_node_type} cn
                WHERE ex.profile_id = p.id
                AND cn.profile_id = p.id
                AND ex.level {direction} cn.level 
                AND cn.id IN {central_node_id_tuple}
                GROUP BY ex.title
                ORDER BY amount DESC
                LIMIT 10
    """.format(central_node_type=central_node_type,
               central_node_id_tuple=central_node_id_tuple,
               direction=direction)
    result = pd.read_sql(query, connection)
    result = {"labels": result.labels.values.tolist(
    ), "data": result.amount.values.tolist()}
    return result


def get_education_count(central_node_type,
                        central_node_id_tuple,
                        direction):
    query = """SELECT ed.field as labels, COUNT(ed.field) as amount
                FROM api_education ed, 
                api_profile p,
                api_{central_node_type} cn
                WHERE ed.profile_id = p.id
                AND cn.profile_id = p.id
                AND ed.level {direction} cn.level 
                AND cn.id IN {central_node_id_tuple}
                AND ed.field != 'None'
                AND ed.field != ''
                GROUP BY ed.field
                ORDER BY amount DESC
                LIMIT 10
    """.format(central_node_type=central_node_type,
               central_node_id_tuple=central_node_id_tuple,
               direction=direction)
    result = pd.read_sql(query, connection)
    result = {"labels": result.labels.values.tolist(
    ), "data": result.amount.values.tolist()}
    return result


def get_next_child_count(level, profile_id):
    query = """SELECT ex.company_name, 
                    ex.title, 
                    ex.from_date, 
                    ex.to_date, 
                    ex.level, 
                    ex.profile_id
                FROM api_experience ex, 
                    api_profile p,
                    api_experience cn
                WHERE ex.profile_id = p.id
                    AND cn.profile_id = p.id
                    AND cn.title iLIKE 'product manager'
                    AND cn.company_name iLIKE 'microsoft'
                    AND ex.level = cn.level + {level}
                    AND p.id = {profile_id}""".format(level=level,
                                                      profile_id=profile_id)
    with connection.cursor() as cursor:
        cursor.execute(query)
    return dictfetchall(cursor)
