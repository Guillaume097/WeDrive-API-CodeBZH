# WeDrive API - Step 3-5 - Code.BZH 2019

Désormais, nous allons commencer à faire le lien avec nos différentes ressources (Car,User,Location,Center). Mais avant de passer à la création de la base de donnée, nous allons décrire les modèles avec un outil de validation du nom de ``Joi``.

## Qu'est-ce qu'il faut faire ? 

- Reproduisez les étapes 3-1 (schéma) et 3-2 (validation) avec la ressource Location

La ressource Location comprend ses champs : 
```
{
    startDate: null,
    endDate:null,
    car:{
        _id:null,
        name:'',
        marque: '',
        model:'',
        details:'',
        registration:{
            country:'',
            date:''
        },
        owner:{
            _id:null,
            firstname:'',
            lastname:'',
            email:''
        }
    },
    user:{
        _id:null,
        firstname:'',
        lastname:'',
        email:''
    },
    review:{
        _id:null,
        source:'',
        evaluation:'',
        date:null,
        stars:Number,
        approved:null
    },
    payment:{
        _id:null,
        emitOn:null,
        card:{
            name:'',
            type:'',
            number:'',
            expiration:null
        },
        payOn:null
    }
}
```

Pour vous aider, consultez la documentation de Joi : [Documentation](https://github.com/hapijs/joi)

Pour vous aider, consultez la documentation d'Express : [Documentation](https://expressjs.com/fr/guide/routing.html)


## Et ensuite ? 

Vous avez fini ? Bravo ! Vous pouvez passer à la step-4-1 avec la commande ```git checkout step-4-1```