# Basic JWT Auth Server‏

Basic template of a JWT auth server writen in Nodejs

## Technologies

- [Nodejs ⭢ 12.13.0](https://nodejs.org/pt-br/download/)
- [express: ⭢ 4.17.1](https://github.com/expressjs/express)
- [jsonwebtoken: ⭢ 8.5.1](https://github.com/auth0/node-jsonwebtoken)
- [mongoose: ⭢ 5.9.18](https://github.com/Automattic/mongoose)
- [@hapi/joi ⭢ 17.1.1](https://github.com/hapijs/joi)
- [bcryptjs: ⭢ 2.4.3](https://github.com/dcodeIO/bcrypt.js/)
- [dotenv: ⭢ 8.2.0](https://github.com/motdotla/dotenv)
- [REST Client: ⭢ 0.23.2](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [nodemon ⭢ 2.0.4](https://github.com/remy/nodemon)

## Database

For the users the projects use MongoDB in MongoDB Atlas, to create a database [click here](https://www.mongodb.com/cloud/atlas/signup)

## Configuration

Create a .env file with the vars

- PORT ⭢ Port that the server will run
- DB_ADRESS ⭢ MongoDB Atlas database adress
- JWT_SECRET ⭢ JWT secret

## Run

To run the server just type in the terminal

    npm start

## Test

Just go into the REST.http file and click in the **`Send Request`** button above the links, or you can use another API Testing Tools.

## Add Private Route

Just go into routes folder inside default.js end add your route with jwtAuth var as Middleware.

## Deploy

You can deploy in diferrents services, but is recomended [Heroku](https://heroku.com)

## Thanks

If I helped you in any way give me a 🌟.
Contact: jonatangabrielborotlon@outlook.com
