const User = require('./User');
const Routine = require('./Routine');
const Behavior = require('./Behavior');
const Habit = require('./Habit');

//Routines have many behaviors
Routine.hasMany(Behavior, {

});

//behaviors are found in a routine
Behavior.belongsTo(Routine, {

});

Habit.hasMany(Behavior, {

});

Behavior.belongsTo(Habit, {

});

module.exports = { User, Routine, Behavior, Habit };