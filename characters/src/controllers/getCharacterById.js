const Character = require('../data')

module.exports = async(req, res ) => {
    const character = await Character.get()
    res.status(200).json(character)
}