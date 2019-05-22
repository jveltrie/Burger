var mysql = require('mysql');
var connection;

// JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '04Autumn',
		database: 'burgers_db'
	});
};

connection.connect(function(err) {
	if (err) {
		console.error('There was an error conencting: ' + err.stack + '\n');
		return;
	}
	console.log('You are connected as id ' + connection.threadId + '\n');
});

module.exports = connection;