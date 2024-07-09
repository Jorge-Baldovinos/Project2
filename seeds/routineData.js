const { Routine } = require('../models');

const routineData = [
    {
        name: 'Mock Morning Routine',
    },
];

const seedRoutine = () => Routine.bulkCreate(routineData);

module.exports = seedRoutine;