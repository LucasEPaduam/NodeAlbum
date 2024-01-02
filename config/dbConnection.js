const mysql = require ('mysql');

const host = 'localhost';
const database = 'museu';
const  user = 'root';
const password = 'ifsp';


module.exports = () => {
    return dbConn = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
    });
}