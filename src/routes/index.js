
const routes = require('express').Router();
const routerCars = require('./cars')
const routerLocations = require('./locations')
const routerUsers = require('./users')

routes.get('/', function (req, res) {
    res.send('Hello World!')
});

routes.use('/',routerCars)
routes.use('/',routerLocations)
routes.use('/',routerUsers)

module.exports = routes;