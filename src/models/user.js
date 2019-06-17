const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
    picture: Joi.string(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    birthday:Joi.object().keys({
        date:Joi.date(),
        city:Joi.string()
    }),
    permit:Joi.object().keys({
        number:Joi.string(),
        country:Joi.string()
    }),
    mail:Joi.string().email().required(),
    password:Joi.string().required(),
    phone:Joi.string().max(10).required(),
    address:Joi.object().keys({
        city:Joi.string(),
        country:Joi.string(),
        address:Joi.string(),
        postalCode:Joi.string().max(5),
        other:Joi.string()
    }),
    information:Joi.string()

});

export default userSchema;
