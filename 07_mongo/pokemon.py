#Team Global Waming -- Ricky Lin, Kendrick Liang
#SoftDev2 pd6
#K07 -- Import/Export Bank
#2019-03-04

'''
The Pokedex dataset contains information about all 151 Generation I Pokemon, including ID, name, type, weaknesses, spawn chance, and more"
Link: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

Import mechanism:
If the db is already in the server, it is dropped to prevent duplicates. A new db GlobalWaming and collection pokemon are created. Because the dataset is a JSON file, it can be loaded as a python dictionary list and inserted into the collection with the insert_many function.
'''

import pymongo, json

SERVER_ADDR="142.93.206.119"
connection=pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("GlobalWaming")
db = connection.GlobalWaming
collection = db.pokemon

f = open("pokedex.json")
data = json.load(f)
collection.insert_many(data["pokemon"])

def find_id(pokemon_id):
    return collection.find({"id": pokemon_id})

def find_name(name):
    return collection.find({"name": name})

def find_type(pokemon_type):
    return collection.find({"type": pokemon_type})

def find_weakness(weakness):
    return collection.find({"weaknesses": weakness})

def find_type_weakness(pokemon_type, weakness):
    return collection.find({"$and":[{"type": pokemon_type}, {"weaknesses": weakness}]}) 

def find_spawn(spawn_chance):
    return collection.find({"spawn_chance":{"$gt" : spawn_chance}})

def find_pokemon_rate(name, spawn_chance):
    return collection.find({"$and":[{"name": name}, {"spawn_chance": {"$gt" : spawn_chance}}]}) 

