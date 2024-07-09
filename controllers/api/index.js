const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routineController');

// Route to get all routines
router.get('/routines', routineController.getRoutines);

// Route to create a new routine
router.post('/routines', routineController.createRoutine);

// Route to add a task to a routine
router.post('/routines/:routineId/tasks', routineController.addTaskToRoutine);

// Route to delete a routine
router.delete('/routines/:id', routineController.deleteRoutine);

module.exports = router;