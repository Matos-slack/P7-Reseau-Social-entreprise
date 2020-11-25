const mysql = require('mysql');
console.log('Connexion à la base de données...');
let connectdb = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'Fo1ek1kuhEXORapeGaX4371eweD3D3', 
    database: 'groupomania_database', 
});
connectdb.connect(function(err) { 
    if (err) throw err;
    console.log('Connecté!')
});

module.exports = connectdb;
