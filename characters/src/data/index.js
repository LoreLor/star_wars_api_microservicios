const axios = require('axios');


module.exports = {
    list: async() => {
        const characters = await axios.get('http://db:8004/Character')
        return characters.data
    },

    get: async(id) => {
        const character = await axios.get(`http://db:8004/Character/${id}`)
        return character.data
    },

    create: async() => {
        const dataBody = req.dataBody
        const newData = await axios.post('http://db:8004/Character', dataBody)
        return newData.data
    }
}