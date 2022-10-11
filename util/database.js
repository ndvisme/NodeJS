const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Pureblack123!', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;