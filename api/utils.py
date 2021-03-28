
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

