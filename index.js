const express = require('express')
const app = express()
const db = require('./models/db')
//const handlebars = require('express-handlebars')
const { engine } = require('express-handlebars')
const bodyParser = require("body-parser")
const moment = require('moment')
const agendamento = require("./models/agendaatendimento")
const Consulta = require("./models/agendaatendimento")
const porta = 3000

//Configurações

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));
//app.engine('handlebars', handlebars({defaultLayout: 'main'}))


app.engine('handlebars', engine());

app.set('view engine', 'handlebars')


//Rotas
app.get('/', (req, res) => {
    res.render('boasvindas')
})
app.get('/agendaatendimento', (req, res) => {
    res.render('agendaatendimento')
})
app.post('/add-agendamento', function (req, res) {
    agendamento.create({
        nome: req.body.imputNome,
        telefone: req.body.imputTelefone,
        horario: req.body.imputHorario,
        atendido: req.body.imputAtendido
    }).then(function () {
        res.redirect('/agendaatendimento')
        //res.send("Pagamento cadastro com sucesso!")
    }).catch(function (erro) {
        res.send("Erro: Agendamento não foi cadastrado com sucesso!" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})



app.get('/consultahorarios', (req, res) =>{
    Consulta.findAll({order: [['id', 'DESC']]}).then(function(todosatendimentos){
        res.render('consultahorarios', {todosatendimentos: todosatendimentos})
        console.log(todosatendimentos);
    })
    
})





// No terminal, digitar node index
app.listen(porta, () => {
    console.log('OK Servidor inicializado')
});

