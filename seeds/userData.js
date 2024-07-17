const { User } = require('../models');

const userData = [
    {
        username: 'testUser',
        email: 'testUser@gmail.com',
        password: 'password1234',
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;