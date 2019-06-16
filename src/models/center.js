const Joi = require('@hapi/joi');

const centerSchema = Joi.object().keys({
    name: Joi.string().required(),
    postalCode: Joi.string().max(5).required(),
    address:Joi.string().required(),
    city: Joi.string().required(),
    phone:Joi.string().max(10).required()
});

export default centerSchema;