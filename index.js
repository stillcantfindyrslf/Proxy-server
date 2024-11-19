const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.NASA_API_KEY;
const startDate = '2024-11-11';
const endDate = '2024-11-15';


app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.get('/meteors', async (req, res) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const filteredData = [];
    for (const date in data.near_earth_objects) {
        data.near_earth_objects[date].forEach(asteroid => {
            filteredData.push({
                id: asteroid.id,
                name: asteroid.name,
                diameter: asteroid.estimated_diameter.meters.estimated_diameter_max,
                is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
                close_approach_date_full: asteroid.close_approach_data[0].close_approach_date_full,
                relative_velocity: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second
            });
        });
    }
    res.json(filteredData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});




