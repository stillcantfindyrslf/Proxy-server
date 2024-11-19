const { fetchMeteorsData } = require('../repository/nasaRepository');

const getMeteors = async () => {
    const data = await fetchMeteorsData();
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
    return filteredData;
};

module.exports = { getMeteors };