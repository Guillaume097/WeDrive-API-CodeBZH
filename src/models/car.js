

const Joi = require('@hapi/joi');

const carSchema = Joi.object().keys({
    marque: Joi.string(),
    model:Joi.string(),
    details:Joi.string(),
    registration:Joi.object().keys({
        country:Joi.string(),
        date:Joi.date()
    }),
    seats:Joi.number(),
    doors:Joi.number(),
    energy:Joi.boolean(),
    gearbox:Joi.boolean(),
    kilometers:Joi.number(),
    clim:Joi.boolean(),
    regulator:Joi.boolean(),
    gps:Joi.boolean(),
    baby:Joi.boolean(),
    roof:Joi.boolean(),
    bike:Joi.boolean(),
    snow:Joi.boolean(),
    chains:Joi.boolean(),
    ski:Joi.boolean(),
    cd:Joi.boolean(),
    description:Joi.string(),
    conditions:Joi.string(),
    price:Joi.string(),
    pictures:Joi.array(Joi.object.keys({
        name:Joi.string(),
        path:Joi.string()
    })),
    available:Joi.boolean(),
    address:Joi.object.keys({
        city:Joi.string(),
        address:Joi.string(),
        postalCode:Joi.string()
    }),
    owner:Joi.object.keys({
        _id:Joi.string(),
        firstname:Joi.string(),
        lastname:Joi.string(),
        email:Joi.string()
    }),
    center:Joi.object.keys({
        _id:Joi.string(),
        name:Joi.string()
    })
});

export default carSchema;
