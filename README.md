# React and Spring

- First pull a postgres image 
```
docker pull postgres
```
- run the docker container
```
- docker run --name postgres-db -e POSTGRES_PASSWORD=master -p 5432:5432 -d {yourdbName}

- docker exec -it postgres-db bash
- psql -h localhost -U postgres

Host: localhost
Port: 5432
User: {yourdbName}
Password: master

```
- if an error occurs, try changing the port value (first port value e.g 5400:5432) use an application to connet to the docker container like tableplus or beekeeper studio 

- create a database e.g CREATE DATABASE spring1;


## The Backend
- can be run by ./mvnw.cmd in vscode or running the main java file 
---------------
### END POINTS
-------------------
#### POST
```
   - localhost:8080/user - Add a new User in the Database
```

#### GET
```
  - localhost:8080/users - Get all users in the Database
  - localhost:8080/user/{id} - Get a specific user in the Database
```

#### PUT
```
  - localhost:8080/user/{id} - Edit a specific user Details if any correction is needed
```

#### DELETE

```
  - localhost:8080/user/id - Delete a user
```

- All this code can be found in the restfulman folder
------------


# The FrontEnd
Open the fronend folder in your editor run:

```
yarn
```
Wait for the dependancies to be installed then run:

```
yarn dev
```
