const routerCars = require('express').Router();

routerCars.get('/v1/car', function (req, res) {
  res.send('Liste des voitures')
})

routerCars.post('/v1/car', function (req, res) {
    res.send('Création de la première voiture');
});


module.exports = routerCars;
