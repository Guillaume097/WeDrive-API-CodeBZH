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


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
exports = app; 