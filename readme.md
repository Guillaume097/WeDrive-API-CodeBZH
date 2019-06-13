# WeDrive API - Step 1-5 - Code.BZH 2019

Dans cette première partie, nous faisons surtout de la configuration et poser les bases pour notre API. 

Ici l'objectif va être de créer une structure de projet qui va nous permettre de faire évoluer l'API.

Voici la structure de dossier que j'ai choisi : 

![Image](https://github.com/TonyCois/WeDrive-API-CodeBZH/blob/step-1-5/assets/img/hello2.png)

Dans le détail : 

- assets : c'est ici que seront stocké les ressources (image, données statiques, ...) utilisées par le serveur

- configs : c'est ici où seront déposé les configurations du projet (mail, authentification, ...)

- docs : il s'agit de l'endroit où la documentation sera écrite

- public : c'est le dossier coté client qui sera "exposé" par le serveur (on y reviendra par la suite)

- src : c'est le dossier qui contiendra toute notre logique métier de l'application

    - actions : c'est là où il y aura les méthodes de chacun de nos objets

    - helpers : c'est là où il y aura nos helpers, c'est à dire des fichiers JS permettant de mettre en commun des méthodes pour aller plus vite coté métier (on y reviendra)

    - middlewares : un middleware s'intègre à différent moment de la vie de l'application, c'est l'endroit où seront stocké ces fichiers (on y reviendra)

    - models : nos modèles en lien avec Mongoose et Mongo

    - routes : c'est là qu'il y aura l'ensemble de nos routes et donc de notre API

    - utils : c'est que l'on stocke nos fichiers "d'utilities", c'est à dire des méthodes pour aller plus vite mais qui ne sont pas métiers. Par exemple, un fichier sur la gestion des dates. (on y reviendra par l'exemple)

- tests : c'est là ou il y aura nos tests 

Comme vous avez pu le remarquer, j'ai renommé le fichier ``index.js`` par ``server.js`` et je l'ai déplacé dans un nouveau dossier ``src`` qui contient toute la logique métier de l'application.


## Qu'est-ce qu'il faut faire ? 

- Créer la strucutre de fichier similaire
- Renommer et déplacer le fichier index.js  

## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-1-6 avec la commande ```git checkout step-1-6```