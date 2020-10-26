'use strict';
const { seed } = require('../../db/seed');

module.exports = async (app) => {
    const mysqlDs = app.dataSources.db;
    // migrate lb default tables
    createLbTables(mysqlDs, app);
    // migrate models tables User, Answers & Questions
    await mysqlDs.autoupdate();
    // run seeding script
    seed();
};

const createLbTables = (mysqlDs, app) => {
    const lbTables = ['AccessToken', 'ACL', 'RoleMapping', 'Role'];
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
            if (err) {
                console.log('user already exists');
                return
            }
            console.log('User Created');
        });
        return "db created"
    });
}