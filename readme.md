# WeDrive API - Step 1-2 - Code.BZH 2019

Dans ce projet, nous allons utiliser différents outils que nous allons installer dès maintenant sur le projet.

Lorsque vous installer un outil ou une librairie sur votre projet, c'est ce qu'on appelle une **dépendence**. On installe la librairie avec NPM en faisant un ``npm install *nom_du_projet*``. Si vous voulez ajouter la dépendence au projet, vous devez utilsier un --save à la fin de la commande.

Il existe différents type de dépendences associées à un projet : 

- dependencies
- devDependencies
- peerDependencies
- optionalDependencies
- bundledDependencies

Pour y voir plus clair, je vous invite à consulter ce [lien](https://yarnpkg.com/lang/fr/docs/dependency-types/)

## ExpressJS

Express un framework NodeJS qui va vous permettre de gérer plus facilement le routage HTTP sur un serveur NodeJS. Au delà de cet aspect, [Express](https://expressjs.com/fr) est le principal framework utilisé aujourd'hui parmi les frameworks backend javascript. De ce fait, c'est celui qui a le plus grand nombre de ressources en ligne et la plus grande communauté.

Pour vous donner d'autres exemples : [HapiJS](https://hapijs.com/), [Koa](https://koajs.com/), [Nest](https://nestjs.com/) ou encore [LoopBack](https://loopback.io/).

Pour choisir, cela va dépendre de plusieurs paramètres autour du projet que vous voulez faire. Ici dans un but pédagogique, nous avons fait le choix d'utiliser Express. Par exemple, nous aurions pu très bien utiliser LoopBack qui permet de créer une API rapidement avec des outils déjà en place. 

## Mongoose 

Mongoose est ce qu'on appelle un ODM (Object Data Modeling), un outil qui va permettre de faire le lien avec notre base de donnée sous MongoDB et nos différents modèles (User, Car, Location, ...).

## Qu'est-ce qu'il faut faire ? 

- Installer ExpressJS
- Installer Mongoose

## Et ensuite ? 
Vous avez fini ? Bravo ! Vous pouvez passer à la step-1-3 avec la commande git checkout step-1-3
