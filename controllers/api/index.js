const apiRouter = require('express').Router();

const habitRoutes = require("./habitRoutes")

apiRouter.use("/habits", habitRoutes)

module.exports = apiRouter