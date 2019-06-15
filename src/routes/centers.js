const routerCenters = require('express').Router();


routerCenters.get('/v1/center', function (req, res) {
  res.send('Liste des centres automobile agrée')
})

routerCenters.post('/v1/center', function (req, res) {
    res.send('Création du premier CAA');
});

routerCenters.get('/v1/center/:id', function (req, res) {
    res.send('Liste un CAA spécifique');
});

routerCenters.delete('/v1/center/:id', function (req, res) {
    res.send('Delete un CAA spécifique');
});

routerCenters.post('/v1/center/:id', function (req, res) {
    res.send('Modifie un CAA spécifique');
});



module.exports = routerCenters;