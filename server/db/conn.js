const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*Siddarth29',
    database: 'crud',
    port: '3306'
});


conn.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});


module.exports = conn;