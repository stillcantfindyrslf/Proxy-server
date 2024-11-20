const apiKey = process.env.NASA_API_KEY;

const fetchMeteorsData = async (startDate, endDate) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch data from NASA API');
    }

    return await response.json();
};

module.exports = { fetchMeteorsData };