const User = require('./User');
const Routine = require('./Routine');
const Behavior = require('./Behavior');

User.hasMany(Routine, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Routine.belongsTo(User, {
    foreignKey: 'user_id'
});

Routine.hasMany(Behavior, {
    foreignKey: 'routine_id',
    onDelete: 'CASCADE'
});

Behavior.belongsTo(Routine, {
    foreignKey: 'routine_id'
});

module.exports = { User, Routine, Behavior };