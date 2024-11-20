const express = require('express');
const meteorsRoute = require('./meteors');
const roversRoute = require('./rovers');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/meteors', meteorsRoute);
router.use('/rovers', roversRoute);

module.exports = router;