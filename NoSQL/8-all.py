#!/usr/bin/env python3
""" 8-all """


def list_all(mongo_collection):
    """ list all """
    result = []

    for doc in mongo_collection.find():
        result.append(doc)

    return result
