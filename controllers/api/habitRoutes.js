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
router.get('/:id', (req, res)=> {
    console.log({req, res});
    // ModelName.findOne({
        // Optional options
        // Filtering results using where
        // where: { firstColumn: "value" },
        // Returning only specified columns
        // attributes: ["firstColumn", "secondColumn"],
    //   }).then((foundResult) => {});
    Habit.findOne({
        where: {
        id: req.params.id
        }
    }).then((result) => {
        console.log({result})
    })

    res.send("This route gets a single habit")
})
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