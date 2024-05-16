// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Post = sequelize.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
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



module.exports = Post;