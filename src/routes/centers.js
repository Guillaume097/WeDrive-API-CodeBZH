const routerCenters = require('express').Router();
const Joi = require('@hapi/joi');
import centerSchema from '../models/center'
import {connectDB} from '../models'

routerCenters.get('/center', function (req, res) {
  res.send('Liste des centres automobile agrée')
})

routerCenters.post('/center', function (req, res) {
    const {error, value} = Joi.validate(req.body, centerSchema);
    if(error !== null){
        console.log(error)
        res.send('Erreur lors de la création du CAA');
    }else {
        (async () => {
            //On créé une instance de la base
            const { db, client } = await connectDB();

            //On récupère la collection 'centers'
            const collection = db.collection('centers'); 

            //On récupère le resultat de l'insertion
            let result = await collection.insertOne(value);

            //On récupère notre 'center'
            let center = result.ops[0];

            //On ferme la connexion après traitement
            await client.close();

            //On renvoit le 'center' comprenant maintenant un _id
            return center;
   
        })().then((center) => {
            res.send(center);
        }).catch((err) => {
            console.log(err);
            res.send('Erreur lors de la création du CAA en base');
        })
    }
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