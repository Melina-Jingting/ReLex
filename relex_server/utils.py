from neo4j import GraphDatabase
import logging
from neo4j.exceptions import ServiceUnavailable
import pandas as pd
import numpy as np
import spacy

nlp = spacy.load("en_core_web_sm")


class App:

    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        # Don't forget to close the driver connection when you are finished with it
        self.driver.close()

    def find_career_map(self, profile):
        with self.driver.session() as session:
            result = session.read_transaction(self._find_career_map, profile)
        return result

    @staticmethod
    def _find_career_map(tx, profile):
        # if person_name == "EE":
        query = """ MATCH 	(p:Person)-[s:STUDIED]->(edu:Education),
                    (p:Person)-[w:WORKED_AS]->(exp:Experience)
                    WHERE 	edu.degree CONTAINS "Bachelor"
                    AND 	edu.field CONTAINS "{profile}"
                    AND 	edu.university IN [ "National University of Singapore",
                    "Nanyang Technological University",
                    "Singapore Management University"]
                    AND 	w.from_date > s.to_date + duration('P3Y8M')
                    AND 	w.level <8
                    AND 	NOT(exp.title CONTAINS "Intern")
                    AND 	NOT(exp.title CONTAINS "Director")
                    AND     NOT((exp)-[:FOLLOWED_BY]->(exp))
                    CALL {{
                    WITH exp
                    MATCH 	(exp:Experience)-[f:FOLLOWED_BY*..3]->(exp1:Experience),
                    (:Person)-[w1:WORKED_AS]->(exp1)
                    RETURN exp1,w1,f
                    LIMIT 25
                    }}

                    RETURN 	exp,w,exp1,w1,f
                    """.format(profile=profile)
        result = tx.run(query)
        return [row for row in result]

# bolt_url = "neo4j+s://8804e13e.databases.neo4j.io:7687"
bolt_url = "bolt://localhost:7687"
user = "melina"
password = "r3l3xpass"


def create_career_map_dataframe(profile):
    app = App(bolt_url, user, password)
    career_map = app.find_career_map(profile)
    df = pd.DataFrame([{
                        "parent":row["f"][-1].nodes[0].id,
                        "parent_title":row["exp"]["title"], 
                        "parent_company":row["exp"]["company"], 
                        "parent_duration":row["w"]["duration"].months,
                        "parent_description":row["w"]["description"],
                        "child":row["f"][-1].nodes[1].id,
                        "child_title":row["exp1"]["title"], 
                        "child_company":row["exp1"]["company"], 
                        "child_duration":row["w1"]["duration"].months,
                        "child_description":row["w1"]["description"],
                    } for row in career_map]).drop_duplicates(["parent","child"])
    print(len(df))
    df[["parent_type","child_type"]] = df[["parent_title","child_title"]].applymap(lambda x: x.split(" ")[-1])
    df = df.sort_values("parent_type")
    return df

def create_career_map_json(profile):
    df = create_career_map_dataframe(profile)
    d3_input= {
        "name": "You",
        "parent": "null",
        "children": []
    }
    first_jobs = list(set(df.parent.unique()) - set(df.child.unique()))
    first_jobs_df = df[df["parent"].isin(first_jobs)].drop_duplicates("parent")
    first_jobs_df = first_jobs_df.sort_values("parent_type")
    for i in range(min(20,len(first_jobs_df))):
        first_job = first_jobs_df.iloc[i]
        title = first_job.parent_title
        if len(title)<25:
            description_doc = nlp(first_job.parent_description.replace('…\nsee more',''))
            description = ["\n-".join(chunk.text for chunk in description_doc.noun_chunks)]            
            d3_input["children"].append( { "name":first_job.parent.item(),
                            "parent":"You",
                            "duration":first_job.parent_duration.item(),
                            "title":title.split(',')[0],
                            "company":first_job.parent_company,
                            "percentage": 1/len(first_jobs),
                            "salary": "3500~6000",
                            "description": description
                            })
    for i in range(len(d3_input["children"])):
        ##show only the 2nd and 2nd last full branch
        ##set "children" key if show, "_children" key if hide 
        # if (i == 1) or (i == len(d3_input["children"])-1):
        #     child_key = "children" 
        # else:
        #     child_key = "_children" 
        child_key = "children"
        child = d3_input["children"][i]
        grandchildren = add_children(child,df)
        if grandchildren:
            child[child_key] = grandchildren
        if child_key in child:
            for grandchild in child[child_key]:
                grand2children = add_children(grandchild,df)
                if grand2children:
                    grandchild[child_key] = grand2children
                if child_key in grandchild:
                    for grand2child in grandchild[child_key]:
                        grand3children = add_children(grand2child,df)
                        if grand3children:
                            grand2child[child_key] = grand3children  
                        if child_key in grand2child:
                            for grand3child in grand2child[child_key]:
                                grand4children = add_children(grand3child,df)
                                if grand4children:
                                    grand3child[child_key] = grand4children 
                                if child_key in grand3child:
                                    for grand4child in grand3child[child_key]:
                                        grand5children = add_children(grand4child,df)
                                        if grand5children:
                                            grand4child[child_key] = grand5children 
    return d3_input
    
def add_children(parent,df):
    children_list =[]
    parent_name = parent["name"]
    
    children_df = df[df["parent"]==parent_name].drop_duplicates("child")
    children_df = children_df.sort_values("child_type")
    for i in range(len(children_df)):
        child =children_df.iloc[i]
        title = child["child_title"]
        if len(title)<30:
            description_doc = nlp(child.child_description.replace('…\nsee more',''))
            description = ["\n-".join(chunk.text for chunk in description_doc.noun_chunks)] 
            children_list.append( { "name":child.child.item(),
                            "parent":parent_name,
                            "duration":child.child_duration.item(),
                            "title":title,
                            "company":child.child_company,
                            "percentage": 1/len(children_df),
                            "salary": "3500~6000",
                            "description": description
                            })
            
    if len(children_list)>0:
        return children_list
    else:
        return None
    

def handle_uploaded_file(f):
    for chunk in f.chunks():
        print(chunk)



