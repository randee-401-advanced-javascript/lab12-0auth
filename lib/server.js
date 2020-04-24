'use strict';

// External Resources
const express = require('express');
const cors = require('cors');

// Internal Resources
const oauth = require('./oauth.js');

// DONE: What is this line doing?
// creating a variable that can be used to run express functions
const app = express();

// DONE: What is this line doing?
// allowing access from all clients to our server through cors
app.use(cors());

// This line of code allows us to use the HTML pages located in the public folder.
// It is important for OAuth applications to have some "front-end" webpages, because
// we want to have the user redirect to a webpage owned by our OAuth provider.
app.use(express.static('./public'));

// DONE: What is this route doing?
// calling the oauth middle ware and sending the token
// DONE: Document route with swagger comments
/**
 * @route GET /oauth
 * @returns {string} 200 - token 
 */
app.get('/oauth', oauth, (req, res) => {
    res.status(200).send(req.token);
});

// DONE: What is this module exporting?
// exporting the start function to the html page and the acutal app. so we can do things.
// DONE: What does app.listen do?
// app.listen tells express to listen on that port for things to happen
module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log(`Server Up on ${port}`);
        });
    },
};
