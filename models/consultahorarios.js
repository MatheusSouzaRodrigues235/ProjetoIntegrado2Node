const db = require('./db')

const ConsultaAgendamentos = db.sequelize.define('agendaatendimento', {
    nome: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    horario: {
        type: db.Sequelize.INTEGER
    },
    atendido: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//agendaatendimentos.sync({force: true})

module.exports = ConsultaAgendamentos