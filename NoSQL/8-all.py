#!/usr/bin/env python3
""" 8-all """
from pymongo import MongoClient


def list_all(mongo_collection):
    result = []

    for doc in mongo_collection.find():
        result.append(doc)

    return result
