# WeDrive API - Step 4-2 - Code.BZH 2019

Après avoir défini nos modèles ainsi que leurs règles de validation, nous allons rentrer dans le coeur de la réalisation de notre API. A savoir, la connexion avec la base de donnée.

Dans un premier temps, nous allons utiliser directement le driver node-mongo. 

## Qu'est-ce qu'il faut faire ? 

Dans le fichier ``centers.js`` dans le dossier 'routes' :

- Créer une ressource 'center' avec la méthode ``collection.insertOne(value)``
- Renvoyez l'objet 'center' avec son _id généré automatiquement lors de l'insertion
- Fermez la connexion avec la base de donnée avec la méthode ``close``

Pour vous aider, consultez la documentation du driver Mongo : [Documentation](https://mongodb.github.io/node-mongodb-native/)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-4-3 avec la commande ```git checkout step-4-3```