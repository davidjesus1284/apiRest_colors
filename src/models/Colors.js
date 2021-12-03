const Sequelize = require('sequelize');
const sequelize = require('../database/dbConnect');

const Color = sequelize.define('colors', {
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
}, 
{
    timestamps: false
});

module.exports = Color;