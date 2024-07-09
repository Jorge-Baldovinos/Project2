const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Behavior extends Model {}

Behavior.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        starting_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ending_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        routine_id: {
            types: DataTypes.INTEGER,
            references: {
                model: 'routine',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'behavior',
    }
);

module.exports = Behavior;