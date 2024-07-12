const router = require('express').Router();
const {Habit,Behavior} = require('../../models');





// Add router
router.get('/', (req, res) => {
    console.log({req, res});
    Habit.findAll({}).then((habits)=>{
        console.log(habits);

        res.status(200).json(habits)
    })
});
router.post('/', (req, res) => {
    console.log({req, res});
});
router.put('/', (req, res) => {
    console.log({req, res});
});
router.delete('/', (req, res) => {
    console.log({req, res});
});

module.exports = router;