# WeDrive API - Step 1-8 - Code.BZH 2019

Dans cette première partie, nous faisons surtout de la configuration et poser les bases pour notre API. 

Ici nous allons installer (Nodemon)[https://github.com/remy/nodemon] qui va nous permettre de recharger le projet à chaque modification de fichier pour faciliter le développement.

Ce faisant, nous allons créer 2 environnement : DEV et PROD. La différence pour le moment est qu'en DEV le server sera en "live-reload" mais pas en production.


## Qu'est-ce qu'il faut faire ? 

- Installer Nodemon
- Modifier la tâche "dev" par "nodemon src/server.js --exec babel-node --presets babel-preset-env"


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-1-8 avec la commande ```git checkout step-1-8```