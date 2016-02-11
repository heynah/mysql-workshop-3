var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.CLOUD9_DATABASE_IP,
    port: process.env.CLOUD9_DATABASE_PORT,
    user: process.env.CLOUD9_DATABASE_USERNAME,
    password: process.env.CLOUD9_DATABASE_PASSWORD,
    database: 'decodemtl_addressbook' // This could have been an environment variable too
});

connection.query("SELECT * FROM Account LIMIT 5", function(err, results) {
    if (err) {
        console.log(err);
    }
    else {
        // results is an Array of all the rows
        results.forEach(function(result) {
            // this will be called once for each row of results
            console.log(result);
        });
    }
    
});