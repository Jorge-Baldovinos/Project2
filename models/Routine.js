const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Routine extends Model {}

Routine.init(
    { // revisit if we want to add a starting and ending date column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'routine',
    }
);

module.exports = Routine;