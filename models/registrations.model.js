const { db, DataTypes } = require('../utils/database.util')

const Records = db.define('Records', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alloNull: false
    },
    entranceTime: {
        type: DataTypes.DATE,
        alloNull: false
    },    
    exitTime: {
        type: DataTypes.DATE,
        alloNull: true
    },
    status: {
        type: DataTypes.STRING, 
        alloNull: false,       
        defaultValue: 'WORKING'
    }
})

module.exports = { Records }