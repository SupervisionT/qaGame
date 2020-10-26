'use strict';
const questionsSchema = require('../../common/models/questions.json');
const answersSchema = require('../../common/models/answers.json');

module.exports = async (app) => {
    const mysqlDs = app.dataSources.db;
    // migrate lb default tables
    createLbTables(mysqlDs, app);
    // migrate models tables
    mysqlDs.autoupdate();
};

const createLbTables = (mysqlDs, app) => {
    const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    return mysqlDs.autoupdate(lbTables, function (er) {
        if (er) console.log(er);
        console.log(`Loopback tables [ ${lbTables} ] created in `, mysqlDs.adapter.name);
        /**
         * Create account
         * @param {email} email
         * @param {string} password
         * To login use POST /Users/login
         * with parameters:
         * {
         * "email": "a@b.com",
         * "password": "Abcd1234"
         * }
         */
        const account = {
            email: 'a@b.com',
            password: '$2a$10$y4A3PMabK3WVRQOzuVy.2u/T5NVdR7GksojimlmIyiggc1uBuFdQ.'
        };
        app.models.User.create(account, function (err, model) {
            if (err) throw err;

            console.log('Created:', model);
        });
        return "db created"
    });
}