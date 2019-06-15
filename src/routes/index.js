
const routes = require('express').Router();
const routerCars = require('./cars')
const routerLocations = require('./locations')
const routerUsers = require('./users')
const routerCenters = require('./centers')

routes.use('/',routerCars)
routes.use('/',routerLocations)
routes.use('/',routerUsers)
routes.use('/',routerCenters)

module.exports = routes;