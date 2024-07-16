const { Behavior } = require('../models');

const behaviorData = [
    {
        name: 'drink a glass of water',
        description: 'I will have a glass of water with lemon as soon as I wake up.',
        starting_date: 'June 11, 2024 22:00:00',
        ending_date: 'July 02, 2024 22:00:00',
    },
    {
        name: 'make my bed',
        description: 'I will make my bed every morning after waking up.',
        starting_date: 'July 02, 2024 22:00:00',
        ending_date: 'July 23, 2024 22:00:00',
    },
    {
        name: 'stretch',
        description: 'I will stretch every morning when waking up.',
        starting_date: 'July 02, 2024 22:00:00',
        ending_date: 'July 23, 2024 22:00:00',
    },
    {
        name: 'meditate',
        description: 'I will meditate for 5 minutes every morning after waking up.',
        starting_date: 'July 02, 2024 22:00:00',
        ending_date: 'July 23, 2024 22:00:00',
    },
    {
        name: 'read',
        description: 'I will read for 15 minutes every morning when I wake up',
        starting_date: 'July 02, 2024 22:00:00',
        ending_date: 'July 23, 2024 22:00:00',
    },
];

const seedBehavior = () => Behavior.bulkCreate(behaviorData);

module.exports = seedBehavior;