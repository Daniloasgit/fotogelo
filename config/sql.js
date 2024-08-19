const mysql = require('mysql2');

const on = mysql.createConnection({

host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});

on.connect((err)=>{
    if (err) {
console.error('erro ao se conectar ao banco de dados', err);
return;
    }
    console.log(`Conectado ao banco de dados, bem-vindo: ${process.env.DB_NAME}`);
});

module.exports = on