const Character = require('../data');


module.exports= async(req, res) => {
    const newCharacter = await Character.create();
   res.status(201).json(newCharacter);
};