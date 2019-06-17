

const Joi = require('@hapi/joi');

const locationSchema = Joi.object().keys({
    startDate: Joi.date(),
    endDate:Joi.date(),
    car:Joi.object.keys({
        _id:Joi.string(),
        name:Joi.string(),
        marque: Joi.string(),
        model:Joi.string(),
        details:Joi.string(),
        registration:Joi.object.keys({
            country:Joi.string(),
            date:Joi.date()
        }),
        owner:Joi.object.keys({
            _id:Joi.string(),
            firstname:Joi.string(),
            lastname:Joi.string(),
            email:Joi.string()
        })
    }),
    user:Joi.object.keys({
        _id:Joi.string(),
        firstname:Joi.string(),
        lastname:Joi.string(),
        email:Joi.string().email()
    }),
    review:Joi.object.keys({
        _id:Joi.string(),
        source:Joi.string(),
        evaluation:Joi.string(),
        date:Joi.date(),
        stars:Joi.number(),
        approved:Joi.boolean()
    }),
    payment:Joi.object.keys({
        _id:Joi.string(),
        emitOn:Joi.date(),
        card:{
            name:Joi.string(),
            type:Joi.string(),
            number:Joi.string(),
            expiration:Joi.string()
        },
        payOn:Joi.date()
    })
});

export default locationSchema;