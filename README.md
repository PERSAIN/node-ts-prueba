# node-ts-prueba Camilo Pérez

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser the response or see it in your terminal.\
This commnad also create the build folder for production

### `npm run lint`
we use this script to pass esLint rules to have better code.

### `npm run clean`
we use rimraf to clean the build folder, sometimes when we install and our server is running sometimes crash, so rimraf is to force the project to build "build" folder again

## Run mongoDB
first of all you need to have mongodb in your computer, you can install it from here => https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ 

after that you can install mongoDB Compass, this is an UI to see all the collections you have, yo can install it from here => https://docs.mongodb.com/compass/current/install/ \

finally you have to run your database, running sudo service mongod start\
Now you have mongo WORKING!

#In this project we have a crud, so pls use postman or insomnia to send all the information the server need to save, the endpoint is a post and the route is localhost:3000/cards




