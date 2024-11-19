const express = require('express');
const { getMeteors } = require('../../usecases/meteors');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const meteors = await getMeteors();
        res.json(meteors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch meteors' });
    }
});

module.exports = router;