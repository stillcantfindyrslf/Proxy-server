const Joi = require('joi');

const roverSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': '"id" should be a type of text',
        'any.required': '"id" is a required field',
    }),
    name: Joi.string().min(3).required().messages({
        'string.min': '"name" should have at least 3 characters',
        'any.required': '"name" is a required field',
    }),
    API_KEY: Joi.string().required().messages({
        'any.required': '"API_KEY" is a required field',
    }),
});

module.exports = roverSchema;