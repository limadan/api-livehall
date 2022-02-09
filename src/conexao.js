const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../livehall.db', sqlite3.OPEN_READWRITE, (err=>{
    if(err){
        console.log(err)
    }else{
        console.log("Sucess")
    }
}));

const query = 'SELECT * FROM usuarios';

db.all(sql, [], (err, result)=>{
    if(err) return console.log(err);
    return result;
})

db.close((err)=>{
    console.log(err)
})

module.exports = db