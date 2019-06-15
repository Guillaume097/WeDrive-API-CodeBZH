const routerUsers = require('express').Router();


routerUsers.get('/v1/user', function (req, res) {
  res.send('Liste des utilisateurs')
})

routerUsers.post('/v1/user', function (req, res) {
    res.send('Création du premier utilisateur');
});

routerUsers.get('/v1/user/:id', function (req, res) {
  res.send('Liste un utilisateur spécifique');
});

routerUsers.delete('/v1/user/:id', function (req, res) {
  res.send('Delete un utilisateur spécifique');
});

routerUsers.post('/v1/user/:id', function (req, res) {
  res.send('Modifie un utilisateur spécifique');
});


module.exports = routerUsers;