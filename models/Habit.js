const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Habit extends Model {}

Habit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        behavior_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'behavior',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'painting',
    }
);

module.exports = Habit;