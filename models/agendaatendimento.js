const db = require('./db')

const Agendamento = db.sequelize.define('agendaatendimento', {
    nome: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    horario: {
        type: db.Sequelize.NUMBER
    },
    atendido: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//agendaatendimentos.sync({force: true})

module.exports = Agendamento