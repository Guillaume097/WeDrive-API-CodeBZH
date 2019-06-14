const routerLocations = require('express').Router();


routerLocations.get('/v1/location', function (req, res) {
  res.send('Liste des locations')
})

routerLocations.post('/v1/location', function (req, res) {
    res.send('Création de la première location');
});

module.exports = routerLocations;