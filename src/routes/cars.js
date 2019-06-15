const routerCars = require('express').Router();

routerCars.get('/v1/car', function (req, res) {
  res.send('Liste des voitures')
})

routerCars.post('/v1/car', function (req, res) {
    res.send('Création de la première voiture');
});

routerCars.get('/v1/car/:id', function (req, res) {
  res.send('Liste une voiture spécifique');
});

routerCars.delete('/v1/car/:id', function (req, res) {
  res.send('Delete une voiture spécifique');
});

routerCars.post('/v1/car/:id', function (req, res) {
  res.send('Modifie une voiture spécifique');
});

module.exports = routerCars;
