# WeDrive API - Step 2-3 - Code.BZH 2019

Dans cette deuxième partie, nous allons commencer à jouer un peu plus avec Express et commencer notre API. 

Dans le cadre du projet, nous avons défini 4 ressources accessibles à travers l'API : 

- User
- Center
- Location
- Car

Chacune des ressources doit disposer de 5 routes : 

- CREATE : Création d'une ressource
- READ : Lecture d'une ressource
- UPDATE : Modification d'une ressource
- DELETE : Delete d'une ressource
- LIST : Liste de l'ensemble des ressources

Nous allons créer l'ensemble de nos routes avec Express. Pour le moment, chacune de ses routes renverra un message du type "*action* de la ressource" de la même manière que la première route "/" renvoyais "Hello World !".

## Qu'est-ce qu'il faut faire ? 

Dans le fichier server.js : 

- Créer le reste des routes pour les ressources Center, Car, Location

Pour vous aider, consulter la documentation d'Express : (Documentation)[https://expressjs.com/fr/guide/routing.html]

Pour tester vos routes, je vous encourage à utiliser Postman.

## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-2-4 avec la commande ```git checkout step-2-4```