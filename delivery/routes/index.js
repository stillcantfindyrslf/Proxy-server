const express = require('express');
const meteorsRoute = require('./meteors');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/meteors', meteorsRoute);

module.exports = router;