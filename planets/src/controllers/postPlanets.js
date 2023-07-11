const Planets = require('../data');


module.exports = async(req, res) => {
    const newPlanet = await Planets.create();
    res.status(201).json(newPlanet);
}