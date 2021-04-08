const express = require('express')
const bodyParser = require('body-parser')
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

// Seta a view engine do ejs para o app
app.set('view engine', 'ejs')

// Insere o middleware body-parser ao express para que possamos pegar parametros nas urls
app.use(bodyParser.urlencoded({ extended: true }))

// Insere um novo cadastro na tabela people
app.post('/insert', (req, res) => {
    let post = {
        name: req.body.name
    }
    let sql = 'INSERT INTO people SET ?'
    let query = connection.query(sql, post, (err, result) => {
        if(err) throw err
        res.redirect('/')
    })
})

// Carrega a tela do formulario
app.get('/', (req, res) => {
    let sql = "SELECT * FROM people"
    connection.query(sql, (err, result) => {
        if(err) throw err
        res.render(path.join(__dirname + '/view/index.ejs'), {data: result})
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})