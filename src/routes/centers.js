const routerCenters = require('express').Router();


routerCenters.get('/center', function (req, res) {
  res.send('Liste des centres automobile agrée')
})

routerCenters.post('/center', function (req, res) {
    res.send('Création du premier CAA');
});

routerCenters.get('/center/:id', function (req, res) {
    res.send('Liste un CAA spécifique');
});

routerCenters.delete('/center/:id', function (req, res) {
    res.send('Delete un CAA spécifique');
});

routerCenters.post('/center/:id', function (req, res) {
    res.send('Modifie un CAA spécifique');
});



module.exports = routerCenters;