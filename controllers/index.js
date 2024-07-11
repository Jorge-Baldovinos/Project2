// controllers/index.js
// const habitsController = require('./habits');
// const behaviorsController = require('./behaviors');

const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;