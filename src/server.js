const express = require('express');
const app = express();

app.get('/v1/user', function (req, res) {
  res.send('Liste des utilisateurs')
})

app.post('/v1/user', function (req, res) {
  res.send('Création du premier utilisateur');
});

app.get('/v1/user/:id', function (req, res) {
  res.send('Liste un utilisateur spécifique');
});

app.delete('/v1/user/:id', function (req, res) {
  res.send('Delete un utilisateur spécifique');
});

app.post('/v1/user/:id', function (req, res) {
  res.send('Modifie un utilisateur spécifique');
});

app.get('/v1/center', function (req, res) {
  res.send('Liste des centres automobile agrée')
})

app.post('/v1/center', function (req, res) {
    res.send('Création du premier CAA');
});

app.get('/v1/center/:id', function (req, res) {
    res.send('Liste un CAA spécifique');
});

app.delete('/v1/center/:id', function (req, res) {
    res.send('Delete un CAA spécifique');
});

app.post('/v1/center/:id', function (req, res) {
    res.send('Modifie un CAA spécifique');
});

app.get('/v1/location', function (req, res) {
  res.send('Liste des locations')
})

app.post('/v1/location', function (req, res) {
    res.send('Création de la première location');
});

app.get('/v1/location/:id', function (req, res) {
  res.send('Liste une location spécifique');
});

app.delete('/v1/location/:id', function (req, res) {
  res.send('Delete une location spécifique');
});

app.post('/v1/location/:id', function (req, res) {
  res.send('Modifie une location spécifique');
});

app.get('/v1/car', function (req, res) {
  res.send('Liste des voitures')
})

app.post('/v1/car', function (req, res) {
    res.send('Création de la première voiture');
});

app.get('/v1/car/:id', function (req, res) {
  res.send('Liste une voiture spécifique');
});

app.delete('/v1/car/:id', function (req, res) {
  res.send('Delete une voiture spécifique');
});

app.post('/v1/car/:id', function (req, res) {
  res.send('Modifie une voiture spécifique');
});



app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
exports = app; 