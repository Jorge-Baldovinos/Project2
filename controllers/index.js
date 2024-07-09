const db = require('../models'); // Import your Sequelize models

// Controller for getting all routines
exports.getRoutines = async (req, res) => {
  try {
    const routines = await db.Routine.findAll({ include: db.Task });
    res.json(routines);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Controller for creating a new routine
exports.createRoutine = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newRoutine = await db.Routine.create({ name, description });
    res.json(newRoutine);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Controller for adding a task to a routine
exports.addTaskToRoutine = async (req, res) => {
  const { routineId, taskName, taskDescription } = req.body;

  try {
    const routine = await db.Routine.findByPk(routineId);

    if (!routine) {
      return res.status(404).json({ msg: 'Routine not found' });
    }

    const newTask = await db.Task.create({ name: taskName, description: taskDescription });
    await routine.addTask(newTask);

    res.json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Controller for deleting a routine
exports.deleteRoutine = async (req, res) => {
  const { id } = req.params;

  try {
    const routine = await db.Routine.findByPk(id);

    if (!routine) {
      return res.status(404).json({ msg: 'Routine not found' });
    }

    await routine.destroy();
    res.json({ msg: 'Routine deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};