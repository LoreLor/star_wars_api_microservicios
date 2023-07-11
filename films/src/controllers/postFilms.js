const Films = require('../data');


module.exports= async(req, res) => {
    const newFilms = await Films.create();
    res.status(201).json(newFilms);
};