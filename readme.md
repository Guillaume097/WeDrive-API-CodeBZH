# WeDrive API - Step 3-4 - Code.BZH 2019

Désormais, nous allons commencer à faire le lien avec nos différentes ressources (Car,User,Location,Center). Mais avant de passer à la création de la base de donnée, nous allons décrire les modèles avec un outil de validation du nom de ``Joi``.

## Qu'est-ce qu'il faut faire ? 

- Reproduisez les étapes 3-1 (schéma) et 3-2 (validation) avec la ressource Car

La ressource Car comprend ses champs : 
```
{
    marque: '',
    model:'',
    details:'',
    registration:{
        country:'',
        date:''
    },
    seats:null,
    doors:null,
    energy:'',
    gearbox:'',
    kilometers:null,
    clim:null,
    regulator:null,
    gps:null,
    baby:null,
    roof:null,
    bike:null,
    snow:null,
    chains:null,
    ski:null,
    cd:null,
    description:'',
    conditions:'',
    price:'',
    pictures:[],
    available:null,
    address:{
        city:'',
        address:'',
        postalCode:''
    },
    owner:{
        _id:null,
        firstname:'',
        lastname:'',
        email:''
    },
    center:{
        _id:null,
        name:''
    }
}
```

Pour vous aider, consultez la documentation de Joi : [Documentation](https://github.com/hapijs/joi)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-3-5 avec la commande ```git checkout step-3-5```