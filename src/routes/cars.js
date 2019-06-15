const routerCars = require('express').Router();

routerCars.get('/car', function (req, res) {
  res.send('Liste des voitures')
})

routerCars.post('/car', function (req, res) {
    res.send('Création de la première voiture');
});

routerCars.get('/car/:id', function (req, res) {
  res.send('Liste une voiture spécifique');
});

routerCars.delete('/car/:id', function (req, res) {
  res.send('Delete une voiture spécifique');
});

routerCars.post('/car/:id', function (req, res) {
  res.send('Modifie une voiture spécifique');
});

module.exports = routerCars;
