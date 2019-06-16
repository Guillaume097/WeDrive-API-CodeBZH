# WeDrive API - Step 3-3 - Code.BZH 2019

Désormais, nous allons commencer à faire le lien avec nos différentes ressources (Car,User,Location,Center). Mais avant de passer à la création de la base de donnée, nous allons décrire les modèles avec un outil de validation du nom de ``Joi``.

## Qu'est-ce qu'il faut faire ? 

- Reproduisez les étapes 3-1 (schéma) et 3-2 (validation) avec la ressource User

La ressource User comprend ses champs : 
```
{
    picture: '',
    firstname: '',
    lastname: '',
    birthday:{
        date:null,
        city:''
    },
    permit:{
        number:'',
        country:'
    },
    mail:'',
    password:'',
    phone:'',
    address:{
        city:'',
        country:'',
        address:'',
        postalCode:'',
        other:''
    },
    information:''
}
```

Pour vous aider, consultez la documentation de Joi : [Documentation](https://github.com/hapijs/joi)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-3-4 avec la commande ```git checkout step-3-4```