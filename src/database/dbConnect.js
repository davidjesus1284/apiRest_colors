const { Sequelize } = require('sequelize');
const { configSequelize } = require('../config/configServer');

const sequelize = new Sequelize(

    configSequelize.database,
    configSequelize.username,
    configSequelize.password,
    configSequelize.options
    
);

module.exports = sequelize;