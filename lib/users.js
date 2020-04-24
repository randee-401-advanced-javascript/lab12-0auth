'use strict';

// External resources
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// DONE: Update this string to be something unique to your groups project
//
// DONE: Where should the secret typically be stored in a more secure application?
// dotenv file
let SECRET = 'johnIsASquib';

// This creates a small test database, where the only record is test.
// The bcrypt.hashSync function is used to quickly hash the password string 'testPass' as a
// synchronous command
let db = {
    test: { username: 'test', password: bcrypt.hashSync('testPass', 10) },
};

// Create an object as our "model", and add functions to that object.
// This takes the place of Mongoose's model AND our wrapper generic model
// class. We're minimizing on features and external packages in this lab, so that
// the focus can be on OAuth.
let usersModel = {
    // DONE: JSDocs function comments
    /**
    * save - saves to our fake database
    * @param {object} user info
    * @returns {object} object of user info
    */
    save: async (record) => {
        if (!db[record.username]) {
            // Hash the password
            record.password = await bcrypt.hash(record.password, 10);

            // Create the user in the (mock) database
            db[record.username] = record;

            return record;
        }

        return false;
    },

    // DONE: JSDocs function comments
    /**
    * authenticateBasic - checks to see if new user info is in the db
    * @param {object} user info
    * @returns {object} object of user info
    * @returns {boolean} false
    */
    authenticateBasic: async (user, pass) => {
        // Compare the user's stored password with the provided plaintext password
        let valid = await bcrypt.compare(pass, db[user].password);

        if (valid) return db[user];

        return false;
    },

    // DONE: JSDocs function comments
    /**
    * generateToken - saves to our fake database
    * @param {object} user info
    * @returns {string} token
    */
    generateToken: (user) => {
        let token = jwt.sign({ username: user.username }, SECRET);
        return token;
    },

    // DONE: JSDocs function comments
    /**
    * list - returns our db
    * @returns {object} objects of users info
    */
    list: () => {
        return db;
    },
};

module.exports = usersModel;
