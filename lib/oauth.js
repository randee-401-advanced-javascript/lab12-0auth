'use strict';

// GitHub OAuth Implementation
// https://developer.github.com/apps/building-oauth-apps/

// External Resources
const superagent = require('superagent');
const users = require('./users.js');

// Environment Variables
const tokenServerUrl = process.env.TOKEN_SERVER;
const remoteAPI = process.env.REMOTE_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_SERVER = process.env.API_SERVER;

// DONE: JSDocs function comments
/**
 * exchangeCodeForToken - exchanges code for token
 * @param {string} code 
 * @return {string} access token
 */

async function exchangeCodeForToken(code) {
    // DONE: What does .send() do?
    // adds stuff to the body of the post
    let response = await superagent.post(tokenServerUrl).send({
        // DONE: What do each of these key-value pairs mean?
        //code - just a string we got from an api call deal
        //client_id - again, the id that links our server to the account we are using for authO
        //client_secret - super secret password that only we know about so don't ask for it
        //redirect_ur - Where we are going to go with the goodstuff we have from AuthO aka landing pad
        //grant_type - fancy shmancy label for the goods we're getting back. by goods, we mean data

        code: code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: API_SERVER,
        grant_type: 'authorization_code',
    });

    // DONE: What is this access token? This is the token that says our user is who they say they are and has access, a verification key thing. 
    let access_token = response.body.access_token;

    return access_token;
}

// DONE: JSDocs function comments
/**
 * getRemoteUserInfo - gets the remote user info obvi
 * @param {string} token 
 * @return {object} user
 */
async function getRemoteUserInfo(token) {
    // DONE: What is remoteAPI used for?
    // this is the API we use to go and get the user data, aka the good stuff, from
    let response = await superagent
        .get(remoteAPI)
        .set('user-agent', 'express-app')
        .set('Authorization', `Bearer ${token}`);

    let user = response.body;

    return user;
}

// Done: JSDocs function comments
/**
 * getUser - go and get the user 
 * @param {object} remoteUser 
 * @return {array} user and token
 */
async function getUser(remoteUser) {
    // DONE: Why is the password set to plaintext 'oauthpassword' here?
    // this is our fake database we're saving to
    let userRecord = {
        username: remoteUser.name,
        password: 'oauthpassword',
    };

    let user = await users.save(userRecord);
    let token = users.generateToken(user);

    // DONE: What do the square brackets mean here? We are returning an array of two different types of things an object and a JWT
    return [user, token];
}

// DONE: JSDocs function comments
/**
 * authorize - This is our big function that calls allllll the other functions that do all the work. Its an excellent delegator 
 */
module.exports = async function authorize(req, res, next) {
    // DONE: Why do we want a try-catch block here? because so many things can go wrong and we don't want things to break easily
    try {
        let code = req.query.code;
        console.log('(1) CODE:', code);

        let remoteToken = await exchangeCodeForToken(code);
        console.log('(2) ACCESS TOKEN:', remoteToken);

        let remoteUser = await getRemoteUserInfo(remoteToken);
        console.log('(3) GITHUB USER', remoteUser);

        let [user, token] = await getUser(remoteUser);
        req.user = user;
        req.token = token;
        console.log('(4) LOCAL USER', user);

        // DONE : Why do we need a next() here? so we can move on to the next function without spinning our wheels
        next();
    } catch (e) {
        // DONE: What does this next() call lead us to? error handler if needed
        next(`ERROR: ${e.message}`);
    }
};
