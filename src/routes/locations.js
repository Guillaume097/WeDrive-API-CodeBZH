const routerLocations = require('express').Router();

routerLocations.get('/v1/location', function (req, res) {
  res.send('Liste des locations')
})

routerLocations.post('/v1/location', function (req, res) {
    res.send('Création de la première location');
});

routerLocations.get('/v1/location/:id', function (req, res) {
  res.send('Liste une location spécifique');
});

routerLocations.delete('/v1/location/:id', function (req, res) {
  res.send('Delete une location spécifique');
});

routerLocations.post('/v1/location/:id', function (req, res) {
  res.send('Modifie une location spécifique');
});


module.exports = routerLocations;