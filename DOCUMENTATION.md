This document provides detailed information about the REST API that supports CRUD operations for managing user data.

Endpoints

1. Get All Data
   
Endpoint: /api

Method: GET

Description: Retrieve all user data from the database.

Request:

No request parameters required.

Response:

Status Code: 200 OK

Response Body:


{

    {
    
        "id": 1,
        
        "name": "John Doe"
        
    },
    
    {
    
        "id": 2,
        
        "name": "Jane Smith"
        
    }
    
    }

2. Get Data by User ID
   
Endpoint: /api/{id}

Method: GET

Description: Retrieve data for a specific user by their ID.

Request:


Path Parameters:

id (integer): The unique ID of the user.

Response:


Status Code: 200 OK

Response Body:


{

    "id": 1,
    
    "name": "John Doe"
    
}


Response Body:



null


3. Post New Data

Endpoint: /api

Method: POST

Description: Create a new user entry.

Request:


Request Body:


{

    "name": "New User"
    
}

Response:
{
    "user Id": " ",
    
    "name": "iwuegf"
    
    }
    


4. Edit Existing Data
   
Endpoint: /api/{id}

Method: PUT

Description: Update user data for a specific ID.

Request:


Path Parameters:

id (integer): The unique ID of the user.

Request Body:

{
    "name": "Updated Name",
    
}
Response:


{

    "id": 3,
    
    "name": "Updated Name"
    
}


5. Delete Data
   
Endpoint: /api/{id}

Method: DELETE

Description: Remove user data for a specific ID.

Request:


Path Parameters:

id (integer): The unique ID of the user.

Response:

  Successfully deleted the data
  

Known Limitations/Assumptions

The API assumes that user IDs are unique and provided as integers.

We just have to provide a name



Local Setup and Deployment

Clone the repository:


git clone https://github.com/mdasif602/Stage2_HNGx

Install dependencies:

cd your-repo

npm install

We need to change the port to run in your local computer you can choose any port to run on localhost like 3000

Start the server:

node server.js

The API will be accessible at http://localhost:3000.

Please make sure to replace placeholders like {id}, {name}, {email}, and URLs with your actual endpoint paths, parameter names, and server details. Additionally,

provide any specific setup instructions that are relevant to your project.
