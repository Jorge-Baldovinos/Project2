const apiRouter = require('express').Router();

const habitRoutes = require("./routineRoutes")

apiRouter.use("/habits", habitRoutes)

module.exports = apiRouter