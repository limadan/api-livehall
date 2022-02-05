const express = require('express');
const port = 3030;
const conexao = require('./conexao')
const app = express();
const cors = require('cors')


//app.use(express.json)
//app.use(cors)

conexao.connect(
    erro => {
        if(erro){
            console.log(erro)
        }else{
            app.listen(port, ()=>{
                console.log("Servidor rodando!")
            })

            app.get('/streams', (req, res, next)=>{
                const sql = "SELECT * FROM streams";
                conexao.query(sql, (erro, resultados)=>{
                    if(erro){
                        console.log(erro)
                        return erro
                    }else{
                        res.send(resultados)
                        return resultados;
                    }
                })
            })

            app.get('/users', (req, res, next)=>{
                const sql = "SELECT * FROM usuarios";
                conexao.query(sql, (erro, resultados)=>{
                    if(erro){
                        console.log(erro)
                        return erro
                    }else{
                        res.send(resultados)
                        return resultados;
                    }
                })
            })

            app.get('/users/:id', (req, res, next)=>{
                const sql = "SELECT * FROM usuarios WHERE Id_user = ${req.params.id}";
                conexao.query(sql, (erro, resultados)=>{
                    if(erro){
                        console.log(erro)
                        return erro
                    }else{
                        res.send(resultados)
                        return resultados;
                    }
                })
            })
        }
    }
)