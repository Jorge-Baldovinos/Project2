const { Habit } = require('../models');

const habitData = [
    {
        id: '1',
        behavior_id: '1',
    },
];

const seedHabit = () => Habit.bulkCreate(habitData);

module.exports = seedHabit;