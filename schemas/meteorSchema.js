const Joi = require('joi');

const meteorSchema = Joi.object({
    date: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2},\d{4}-\d{2}-\d{2}$/)
        .optional()
        .messages({
            'string.pattern.base': '"date" must be in the format YYYY-MM-DD,YYYY-MM-DD',
        }),
    count: Joi.boolean().optional(),
    'were-dangerous-meteors': Joi.boolean().optional(),
});

module.exports = meteorSchema;