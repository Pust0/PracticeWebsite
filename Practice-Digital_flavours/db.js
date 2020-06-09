const Sequelize = require('sequelize')

const db = new Sequelize('flavourdb', 'flavouruser', 'flavourpass',{
    host: 'localhost',
    dialect: 'mysql'
})

const Users = db.define('users',{
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

db.sync().then(()=>{console.log("Database is synced")})

exports = module.exports = {
    db, Users
}