// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Comment = sequelize.define('comment', {
    body: {
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



module.exports = Comment;