const sequelize = require('../config/connection');
const userData = require('./')
const seedUser = require('./userData')
const seedRoutine = require('./routineData');
const seedBehavior = require('./behaviorData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedRoutine();

    await seedBehavior();

    process.exit(0);
};

seedAll();
