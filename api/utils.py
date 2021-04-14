
def convert_to_case_insensitive_query(query_dict):
    case_insensitive_query = {}
    for key in query_dict:
        case_insensitive_query[key+"__icontains"] = query_dict[key]
    return case_insensitive_query

def convert_dict_to_sql(query_dict, alias):
    query = ""
    for key in query_dict:
        query += "AND {alias}.{key} iLIKE '%{value}%' ".format(alias=alias, 
                                                            key=key,
                                                            value=query_dict[key])
    return query

def convert_additional_filter_to_sql(query_dict):
    direction = query_dict.pop("direction")
    years = query_dict.pop("years")
    if years == "":
        years = "999"
    query = convert_dict_to_sql(query_dict=query_dict,alias='af')
    if direction == "before central node":
        query += "AND af.from_date < cn.to_date "
        query += "AND DATE_PART('year',cn.to_date) - DATE_PART('year',af.from_date) < {years}".format(years=years)
    if direction == "after central node":
        query += "AND af.from_date > cn.to_date "
        query += "AND DATE_PART('year',af.from_date) - DATE_PART('year',cn.to_date) < {years}".format(years=years)
    return query