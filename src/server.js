const express = require('express');
const port = 8000;
const app = express();
const db = require('./database.js')
const cors = require('cors')

app.use(express.json())
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

app.get('/users/:username', (req, res, next)=>{
    const sql = "SELECT * FROM usuarios WHERE username = ${req.params.username}";
    db.all(sql, [], (err, result)=>{
        if(err) return console.log(err);
            res.send(result);
    })
                
    db.close((err)=>{
        console.log(err)
    })
})

app.post("/users", (req,res)=>{
    const sql = "INSERT INTO usuario(nome, username,senha, email,sexo) VALUES(?)";
    db.run(sql, Object.values(req.body), (err)=>{
        if(err) return console.log(err)
        console.log()
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

app.post("/users", (req, res)=>{
    let user = {
        idUser: req.body.idUser,
        nome: req.body.nome,
        username:req.body.username,
        senha:req.body.senha,
        email:req.body.email,
        sexo:req.body.sexo
    }
    db.addUser(user)
    res.send(user)
})