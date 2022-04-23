# Favs API
## Models


I designed three models for this api.

- The first model is User, which allows us to work with users and be able to manage them.
- The second model is Fav , which allows us to create Fav items individually.
- The third model is List that allows us to create a list of Favs, this list will have a specific name and is linked to a user.

## Routes details
This api has private and public routes
## Public Routes 
- POST /auth/local/login 
- POST /api/user (TO CREATE A USER)

## Private Routes 
- GET /api/user         (LIST OF ALL USERS) 
- POST /api/fav         (TO CREATE A FAV) 
- GET /api/fav          (TO GET LIST OF FAVS) 
- POST /api/list        (TO CREATE A LIST OF FAVS) 
- GET /api/list         (TO GET ALL LISTS OF FAVS) 
- GET /api/list/:id     (TO GET A SPECIFIC LIST OF FAV) 
- DELETE /api/list/:id  (TO DELETE A LIST) 
- PUT /api/list/:id     ( TO ADD NEW FAVS TO LIST OF FAVS)

## Used technology
- [node.js] 
- [Express] 
- [JWT] 

## Installation

FavsAPI requires [Node.js](https://nodejs.org/) to run.
Install the dependencies and devDependencies and start the server.
For DEVELOP environments...
```sh
npm i
npm run dev
```

For production environments...

```sh
npm install 
npm run start
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [JWT]: <https://jwt.io/>
   
