const express = require('express');
const { getLatestRoverPhoto } = require('../../usecases/rovers');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { id, name, API_KEY } = req.body;

        if (!id || !name || !API_KEY) {
            return res.status(400).json({ error: 'Missing required fields: id, name, API_KEY' });
        }

        const photo = await getLatestRoverPhoto(API_KEY);

        if (!photo) {
            return res.status(404).json({ error: 'No photos found' });
        }

        res.json({
            photo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch rover photo' });
    }
});

module.exports = router;