const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    port:3006,
    database:'Livehall'
})

module.exports = conexao;

