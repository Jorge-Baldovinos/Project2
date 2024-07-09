const sequelize = require('../config/connection');
const seedRoutine = require('./routineData');
const seedBehavior = require('./behaviorData');
const seedHabit = require('./habitData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedRoutine();

    await seedBehavior();

    await seedHabit();

    process.exit(0);
};

seedAll();
