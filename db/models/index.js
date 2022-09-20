const config = require('../../config/db.config')
const { Sequelize, DataTypes } = require('sequelize')
// const Users = require('./Users.model')
const Author = require('./Authors.model')
const Book = require('./Books.model')
const Magazine = require('./Magazines.model')


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
})

const Authors = Author(sequelize, Sequelize, DataTypes)
const Books = Book(sequelize, Sequelize, DataTypes)
const Magazines = Magazine(sequelize, Sequelize, DataTypes)

// const User = sequelize.define('User', {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.Authors = Authors
db.Books = Books
db.Magazines = Magazines

module.exports = db