'use strict'
//dependencies npm install or yarn install
const express = require('express');
const app = express();
const challengeFunction = require('./challengeFunction')
const PORT = process.env.PORT || 3000

//constructing the function and passing in a callback
const runIt = new challengeFunction(function(msg) {
  console.log('FINISHED', msg)
  server.close()
})

//setting up the server
const server = app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//Checks the node argument after the file name
//starts all the "gets"
if (process.argv[2] === 'run') {
    console.log("Starting...")
    //accessing the challenge method in the get module. challenge takes the url
    runIt.challenge(`http://letsrevolutionizetesting.com/challenge.json`);
} 
else {
    //tells you to pass in a node argument
    console.log("Please enter 'node rainforest.js run' to start")
    return server.close()
}