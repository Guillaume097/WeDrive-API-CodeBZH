const express = require('express');
const app = express();

const routerUsers = require('./routes/users')
const routerCars = require('./routes/cars')
const routerLocations = require('./routes/locations')
const routerCenters = require('./routes/centers')

app.use('/', routerUsers)
app.use('/', routerCars)
app.use('/', routerLocations)
app.use('/', routerCenters)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
exports = app; 