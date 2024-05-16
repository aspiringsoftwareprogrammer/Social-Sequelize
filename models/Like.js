// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Like = sequelize.define('like', {
    reactionType: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
     createdAt: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

});

module.exports = Like;