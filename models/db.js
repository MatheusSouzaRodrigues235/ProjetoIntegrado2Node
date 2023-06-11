const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_projetos', 'root', '', { host: 'localhost', dialect: 'mysql' })

sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
 }).catch(() => {
    console.log("Erro: Conexão com o banco de dados não realizada!")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}