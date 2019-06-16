# WeDrive API - Step 4-4 - Code.BZH 2019

Après avoir défini nos modèles ainsi que leurs règles de validation, nous allons rentrer dans le coeur de la réalisation de notre API. A savoir, la connexion avec la base de donnée.

Dans un premier temps, nous allons utiliser directement le driver node-mongo. 

## Qu'est-ce qu'il faut faire ? 

Dans le fichier ``centers.js`` dans le dossier 'routes' :

- Mettre à jour une ressource 'center' avec la méthode ``collection.updateOne()`` et avec un paramètre dans l'url qui est l'ObjectId de la ressource, ce qui donnera une url ``http://localhost:3000/v1/center/5d06bbd2d69dd4573116e2be``

Pour vous aider, consultez la documentation du driver Mongo : [Documentation](https://mongodb.github.io/node-mongodb-native/)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-4-4 avec la commande ```git checkout step-4-5```