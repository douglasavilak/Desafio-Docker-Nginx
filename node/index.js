const express = require('express')
const mysql = require('mysql')
const path = require('path')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const connection = mysql.createConnection(config)

// Conectando com o banco de dados
connection.connect( (err)  => {
    if(err) throw err
    console.log('MySQL conectado...')
})

// Insere um novo cadastro na tabela people
app.post('/insert', (req, res) => {
    let post = {
        name: req.body.name
    }
    let sql = 'INSERT INTO people SET ?'
    let query = connection.query(sql, post, (err, result) => {
        if(err) throw err
        res.send("Cadastrado com sucesso")
    })
})

// Realiza consulta dos usuarios cadastrados na tabela people
app.get('/select', (req, res) => {
    let sql = "SELECT * FROM people"
    connection.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Carrega a tela do formulario
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/html/form.html'))
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})