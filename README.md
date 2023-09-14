# Stage2_HNGx

This is a REST API which can perform CRUD operations
An API with endpoints for:

CREATE: Adding a new person.  =>/api

READ: Fetching details of a person.  => /api/user_id

UPDATE: Modifying details of an existing person => /api/user_id

DELETE: Removing a person => /api/user_id

LINK on which you can access this API- https://hnx-stage2.onrender.com/api

To perform CRUD operations on this API use POSTMAN:

First Endpoints - GET ALL DATA

LINK - https://hnx-stage2.onrender.com/api

Paste the above link in POSTMAN with get opeartion it will give a json file of all the

data currently present in database

Second Endpoints - GET a specific DATA with userID

LINK - https://hnx-stage2.onrender.com/api/userID

Paste the above link in POSTMAN with get opeartion it will give a json file of a particular

data currently present in database

Third Endpoints - Post a  DATA

LINK - https://hnx-stage2.onrender.com/api

For this we have to provide data in json file to do this follow the below steps

-In the POSTMAN select POST method

-Then go in body available in below bar

- select raw and select json file
- 
- write inputed data below in format
- 
  {
    "name": "User Name"
  }
  
then send the request and you are done

And we post a new name in database


Fourth Endpoints - Update a data

LINK - https://hnx-stage2.onrender.com/api/userId

Select PATCH Operation
And do the same step as post and you will be able to change the name

Fifth Endpoints - Delete a data

LINK - https://hnx-stage2.onrender.com/api/userId

Paste the above link in POSTMAN with delete operation selected and send the request and it will get deleted.



This is the way to perform CRUD operation 

THANK YOU

