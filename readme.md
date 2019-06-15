# WeDrive API - Step 2-4 - Code.BZH 2019

Dans cette deuxième partie, nous allons commencer à jouer un peu plus avec Express et commencer notre API. 

Maintenant que nous avons notre liste de routes dans le fichier server.js, nous pouvons remarquer qu'il devient de plus en plus illisible du fait d'un nombre important de routes dans le même fichier. 

Afin de mieux structurer notre code, nous allons créer un fichier de routes par ressource dans le dossiers "Routes".

## Qu'est-ce qu'il faut faire ? 

- Créer un fichier "users.js" dans le dossier "routes"
- Déplacer les routes concernant la ressource "User"
- Adapter le code en utilisant la classe ``express.Router``
- Modifier le fichier ``server.js`` pour prendre en compte ses modifications

Pour vous aider, consulter la documentation d'Express : (Documentation)[https://expressjs.com/fr/guide/routing.html]

Pour tester vos routes, je vous encourage à utiliser Postman.

## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-2-5 avec la commande ```git checkout step-2-5```