#Team MicroIsHard
#Kaitlin Wan + Ricky Lin
#Softdev2 Pd6
#K#06 -- Yummy Mongo Py
#2019-02-28

import pymongo

SERVER_ADDR="157.230.63.56"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection = db.restaurants

#Specified BOROUGH
b = "Queens"
def bFind(borough):
    found = collection.find({"borough":borough})
    for item in found:
        print("Displaying restaurants in borough: " + borough + "\n")
        print("Name: "+ item['name'] + "\n")

bFind(b)
    
#Specified ZIPCODE

def zFind(zipcode):
    found = collection.find({"address.zipcode":zipcode})
    for item in found:
        print("Displaying restaurants in zipcode: " + zipcode + "\n")
        print("ZipCode: "+ item['name']+ "\n")

zFind("11219")
zFind("11374")


#Specified Zip and Grade
def zsFind(zipcode,g):
    found = collection.find({"address.zipcode":zipcode,"grades.grade":g})
    for item in found:
        print("Displaying restaurants in zipcode: " + zipcode + " and grade: " + g + "\n")
        print("Zip + Grade: "+ item['name']+ "\n")


zsFind("11374","A")
zsFind("11374","C")

#All restaurants in Zip w/ below score
def sFind(zipcode,s):
    found = collection.find({"address.zipcode":zipcode,"grades.score":{"$lt": s}})
    for item in found:
        print("displaying with zip: " + zipcode + " and score below :" + s + "\n")
        print("Zip+Score: " + item['name']+ "\n")


sFind("11374",3)

def superFind(b,c,s):
    found = collection.find({"borough":b, "cuisine": c, "grades.score":{"$gt": s}})
    for item in found:
        print("Borough+Cuisine+Score(above): " + item['name'])


superFind("Manhattan","Hamburgers",8)

