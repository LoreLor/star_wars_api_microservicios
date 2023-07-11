const axios = require('axios');


module.exports = {
    list: async() => {
        const films = await axios.get('http://localhost:8002/Film')
        return films.data
    },

    get: async(id) => {
        const film = await axios.get(`http://localhost:8002/Film/${id}`)
        return film.data
    },

    create: async() => {
        const dataBody = req.dataBody
        const newFilm = await axios.post('http://localhost:8002/Film', dataBody)
        return newFilm.data
    }
}