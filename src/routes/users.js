const routerUsers = require('express').Router();


routerUsers.get('/user', function (req, res) {
  res.send('Liste des utilisateurs')
})

routerUsers.post('/user', function (req, res) {
    res.send('Création du premier utilisateur');
});

routerUsers.get('/user/:id', function (req, res) {
  res.send('Liste un utilisateur spécifique');
});

routerUsers.delete('/user/:id', function (req, res) {
  res.send('Delete un utilisateur spécifique');
});

routerUsers.post('/user/:id', function (req, res) {
  res.send('Modifie un utilisateur spécifique');
});


module.exports = routerUsers;