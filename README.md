# serverless-api

## uml

[UML](assets/serverless-api.jpg)

## what is the root url to your API

[rootUrl](https://50jwtyklbg.execute-api.us-west-2.amazonaws.com/mugs/)

## What are the routes

the routes are get, get/id create update/id and delete/id

## what inputs do they require

post requires a capacity with a number value
post requires a color with a value of an array of strings
post requires dropable with a boolean value

get all requires nothing

get one requires an id

update requires an id and the new capacity color and dropable values

delete requires an id

## What output do they return

get all returns all the objects in the db(dynamoDB)
get one returns the object in the db at position id
post returns the created object
update returns the updated object
delete returns a message telling you that the object was deleted