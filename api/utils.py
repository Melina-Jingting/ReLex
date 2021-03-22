
def convert_to_case_insensitive_query(query):
    case_insensitive_query = {}
    for key in query:
        case_insensitive_query[key+"__icontains"] = query[key]
    return case_insensitive_query