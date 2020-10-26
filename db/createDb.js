const mysql = require('mysql');
const config = require('../server/datasources.json');

    const { host, user, password, database } = config.db;
    const con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
    });
    
   con.connect(async (err) => {
        if (err) throw err;
        console.log("Connected!");
        return await con.query(`CREATE DATABASE IF NOT EXISTS ${database}`, function (err, result) {
            if (err) throw err;
            console.log("Database created or already exists");
            con.destroy();
        });
    });