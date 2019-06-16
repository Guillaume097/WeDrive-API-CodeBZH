# WeDrive API - Step 3-1 - Code.BZH 2019

Désormais, nous allons commencer à faire le lien avec nos différentes ressources (Car,User,Location,Center). Mais avant de passer à la création de la base de donnée, nous allons décrire les modèles avec un outil de validation du nom de ``Joi``.

## Qu'est-ce qu'il faut faire ? 

Dans le fichier de routing ``centers.js`` et dans la méthode de création d'un Center :

- Envoyez une requête de création de 'center' avec Postman en utilisant le format ``x-www-form-urlencoded``
- Utilisez la méthode ``Joi.validate`` pour valider ces informations
- Retournez un message d'erreur si la validation échoue
- Retournez l'objet si la validation passe

Pour vous aider, consultez la documentation de Joi : [Documentation](https://github.com/hapijs/joi)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-3-3 avec la commande ```git checkout step-3-3```