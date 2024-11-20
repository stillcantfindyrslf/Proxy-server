const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorDetails = error.details.map((err) => err.message);
        return res.status(400).json({
            error: 'Validation error',
            details: errorDetails,
        });
    }

    next();
};

module.exports = validate;
