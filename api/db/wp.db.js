const mysql = require("mysql2/promise");

const wp = mysql.createPool({
	host: '127.0.0.1',
    user: 'root',
    password: 'Raffine9847!',
    port: 3306,
    database: 'wp_datasets',
    multipleStatements: true, // allows to use multiple statements
});

module.exports = wp;