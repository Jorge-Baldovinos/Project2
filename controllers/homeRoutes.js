// Import necessary models
const Behavior = require('../models/Behavior');
const User = require('../models/User');
const Habit = require('../models/Habit');

// Import controllers for business logic
const { getBehaviors, createBehavior } = require('../controllers/behaviorController');
const { getUsers, createUser } = require('../controllers/userController');
const { getHabits, createHabit } = require('../controllers/habitController');

// Define routes using the controllers
router.get('/behaviors', getBehaviors);
router.post('/behaviors', createBehavior);

router.get('/users', getUsers);
router.post('/users', createUser);

router.get('/habits', getHabits);
router.post('/habits', createHabit);

module.exports = router;