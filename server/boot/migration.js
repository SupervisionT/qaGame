'use strict';
const questionsSchema = require('../../common/models/questions.json');
const answersSchema = require('../../common/models/answers.json');

module.exports = async (app) => {
    const mysqlDs = app.dataSources.db;
    // migrate lb default tables
    createLbTables(mysqlDs);
    // migrate models tables
    mysqlDs.autoupdate();
};

const createLbTables = (mysqlDs) => {
    const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    return mysqlDs.autoupdate(lbTables, function (er) {
        if (er) console.log(er);
        console.log(`Loopback tables [ ${lbTables} ] created in `, mysqlDs.adapter.name);
        return "db created"
    });
}