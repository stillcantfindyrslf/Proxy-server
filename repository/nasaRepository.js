const apiKey = process.env.NASA_API_KEY;

const fetchMeteorsData = async (startDate, endDate) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch data from NASA API');
    }

    return await response.json();
};

const fetchRoverPhotos = async (userApiKey) => {
    const useApiKey = userApiKey || apiKey;

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${useApiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch rover photos');
    }

    const data = await response.json();
    return data.photos;
}

module.exports = { fetchMeteorsData, fetchRoverPhotos };