const express = require('express');
const { getMeteors } = require('../../usecases/meteors');
const validate = require("../../middlewares/validate");
const meteorSchema = require("../../schemas/meteorSchema");

const router = express.Router();

router.get('/', validate(meteorSchema), async (req, res) => {
    try {
        const { date, count, 'were-dangerous-meteors': wereDangerousMeteors } = req.query;

        const meteors = await getMeteors({ date, count, wereDangerousMeteors });

        res.json(meteors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch meteors' });
    }
});

module.exports = router;