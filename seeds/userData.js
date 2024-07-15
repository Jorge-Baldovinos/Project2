const { User } = require('../models');

const userData = [
    {
        userName: 'testUser',
        email: 'testUser@gmail.com',
        password: 'password1234',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;