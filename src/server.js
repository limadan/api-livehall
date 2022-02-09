const express = require('express');
const port = 3030;
const app = express();
const db = require('./database.js')
const cors = require('cors')


//app.use(express.json)
app.use(cors())

app.listen(port, ()=>{
    console.log("Servidor rodando!")
})

/*app.get('/streams', (req, res, next)=>{
    const sql = "SELECT * FROM streams";
    db.all(sql, [], (err, result)=>{
        if(err) return console.log(err);
        res.send(result);
    })
                
    db.close((err)=>{
        console.log(err)
    })
})

app.get('/users', (req, res, next)=>{
    const sql = "SELECT * FROM usuarios";
    db.all(sql, [], (err, result)=>{
        if(err) return console.log(err);
        res.send(result);
    })
                
    db.close((err)=>{
        console.log(err)
    })
})

app.get('/users/:id', (req, res, next)=>{
    const sql = "SELECT * FROM usuarios WHERE Id_user = ${req.params.id}";
    db.all(sql, [], (err, result)=>{
        if(err) return console.log(err);
            res.send(result);
    })
                
    db.close((err)=>{
        console.log(err)
    })
})*/

app.get("/streams",(req, res)=>{
    res.send(db.getStreams())
})

app.get("/users",(req, res)=>{
    res.send(db.getUsers())
})

app.get("/users/:id",(req, res)=>{
    res.send(db.getUsers()[req.params.id-1])
})