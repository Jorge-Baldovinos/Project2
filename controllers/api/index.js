const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routineRoutes = require('./routineRoutes');
const behaviorRoutes = require('./behaviorRoutes');

router.use('/users', userRoutes);
router.use('/routines', routineRoutes);
router.use('/behaviors', behaviorRoutes);

module.exports = router;