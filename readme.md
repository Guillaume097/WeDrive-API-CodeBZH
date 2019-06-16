# WeDrive API - Step 4-1 - Code.BZH 2019

Après avoir défini nos modèles ainsi que leurs règles de validation, nous allons rentrer dans le coeur de la réalisation de notre API. A savoir, la connexion avec la base de donnée.

Dans un premier temps, nous allons utiliser directement le driver node-mongo. 

## Qu'est-ce qu'il faut faire ? 

- Exécutez un ``npm install mongodb --save`` pour installer le node-mongo
- Dans le dossier 'models', créer un fichier ``index.js``
- À l'intérieur, créez une méthode ``connectDB`` qui va ouvrir une connexion à la base de donnée "wedrive" en utilisant *Async/Await* et retournez un objet comportant ``client`` (la connexion) et ``db`` (la base de donnée)
- À l'intérieur, créez une méthode ``close`` qui va stopper la connexion à la base de donnée "wedrive" en utilisant *Async/Await*

Pour utiliser vos méthodes, dans le fichier de route ``centers.js`` dans la méthode de création d'un 'center' dans la partie après la validation correcte, essayez d'ouvrir une connection avec la base de donnée.

Voici un exemple de code qui utilise la méthode ``connectDB`` :

![Image](https://github.com/TonyCois/WeDrive-API-CodeBZH/blob/step-4-1/assets/img/hello3.png)

Pour vous aider, consultez la documentation du driver Mongo : [Documentation](https://mongodb.github.io/node-mongodb-native/)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-4-2 avec la commande ```git checkout step-4-2```