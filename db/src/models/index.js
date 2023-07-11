const mongoose = require('mongoose');
const {MONGO_URI} = require('../config');

const conn = mongoose.createConnection(MONGO_URI);

const Character = conn.model("Character", require('./schemas/characterSchema'));
const Film = conn.model("Film", require('./schemas/filmSchema'));
const Planet = conn.model("Planet", require('./schemas/planetSchema'));


// para probar que está funcionando
// Character
//     .find()
//     .populate("films", ["_id", "title"])  // asi me trae solo el id y el titulo de las peliculas
//     .then((res) => console.log(res[0])).catch();


module.exports = {
    Character,
    Film,
    Planet
}





