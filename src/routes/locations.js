const routerLocations = require('express').Router();

routerLocations.get('/location', function (req, res) {
  res.send('Liste des locations')
})

routerLocations.post('/location', function (req, res) {
    res.send('Création de la première location');
});

routerLocations.get('/location/:id', function (req, res) {
  res.send('Liste une location spécifique');
});

routerLocations.delete('/location/:id', function (req, res) {
  res.send('Delete une location spécifique');
});

routerLocations.post('/location/:id', function (req, res) {
  res.send('Modifie une location spécifique');
});


module.exports = routerLocations;