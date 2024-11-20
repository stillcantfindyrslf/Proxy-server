const { fetchRoverPhotos } = require('../repository/nasaRepository');

const getLatestRoverPhoto = async (apiKey) => {
    const photos = await fetchRoverPhotos(apiKey);

    if (!photos || photos.length === 0) {
        return null;
    }

    const latestPhoto = photos[0];
    return {
        camera: latestPhoto.camera.full_name,
        img_src: latestPhoto.img_src,
    };
};

module.exports = { getLatestRoverPhoto };