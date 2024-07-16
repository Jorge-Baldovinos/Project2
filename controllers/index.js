const router = require('express').Router();
// controllers/index.js
const apiRoutes = require('./api');
// const behaviorsController = require('./behaviors');


// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;