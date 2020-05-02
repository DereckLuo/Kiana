import mysql from 'mysql';


let db;

// initialize create a connection to the mysql database
const initialize = function () {
    db = mysql.createConnection({
        host: 'localhost',
        // port: 3306 // use default 
        user: 'root',
        password: 'password',
        database: 'kiana',
    });
    return db;
}

export { initialize }