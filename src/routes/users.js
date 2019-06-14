const routerUsers = require('express').Router();


routerUsers.get('/v1/user', function (req, res) {
  res.send('Liste des utilisateurs')
})

routerUsers.post('/v1/user', function (req, res) {
    res.send('Création du premier utilisateur');
});


module.exports = routerUsers;