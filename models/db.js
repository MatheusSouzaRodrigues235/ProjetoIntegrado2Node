const Sequelize = require('sequelize')

const sequelize = new Sequelize('heroku_529308256408164', 'be5e60c477974a', '3ffcd86c', { host: 'us-cdbr-east-06.cleardb.net', dialect: 'mysql' })

sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
 }).catch(() => {
    console.log("Erro: Conexão com o banco de dados não realizada!")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}