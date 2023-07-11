const axios = require('axios');

// aqui simulo la BD
module.exports = {
    list: async() => {
        const planets = await axios.get('http://loclahost:8004/Planet')
        return planets.data
    },

    get: async(id) => {
        const planet = await axios.get(`http://loclahost:8004/Planet/${id}`)
        return planet.data
    },

    create: async() => {
        const dataBody = req.body
        const newPlanet = await axios.post('http://loclahost:8004/Planet', dataBody)
        return newPlanet.data
    }
}