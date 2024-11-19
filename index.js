const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;
const apiKey = process.env.NASA_API_KEY;


app.get('/meteors', (req, res) => {
    const startDate = '2024-11-11';
    const endDate = '2024-11-15';
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
            .then((data) => {
                res.send(data);
            })
        .catch((error) => {
            console.error('Error fetching data from NASA API:', error);
        });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});




