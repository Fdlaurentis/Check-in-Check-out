const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect:'postgres',
    host: '127.0.0.1',
    username: 'postgres',
    password: 'Fe20551976$',
    port: 5432,
    database: 'exercisOne'
})

module.exports = { db, DataTypes }