// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Profile = sequelize.define('profile', {
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, birthday: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

});

module.exports = Profile;