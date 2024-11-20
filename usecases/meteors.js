const { fetchMeteorsData } = require('../repository/nasaRepository');

const getMeteors = async ({ date, count, wereDangerousMeteors }) => {
    let startDate = '2024-11-11';
    let endDate = '2024-11-15';

    if (date) [startDate, endDate] = date.split(',');

    const data = await fetchMeteorsData(startDate, endDate);

    const filteredData = [];
    let isDangerousMeteors = false;

    for (const dateKey in data.near_earth_objects) {
        data.near_earth_objects[dateKey].forEach(asteroid => {
            if (asteroid.is_potentially_hazardous_asteroid) isDangerousMeteors = true;

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

    if (count) return { count: filteredData.length };

    if (wereDangerousMeteors) return { wereDangerousMeteors: isDangerousMeteors };

    return filteredData;
};

module.exports = { getMeteors };