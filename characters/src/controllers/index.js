const { catchedAsync } = require('../utils')

module.exports = {
    getCharacters : catchedAsync(require('./getCharacters')),
    getCharacterById: catchedAsync(require('./getCharacterById')),
    postCharacter: catchedAsync(require('./postCharacter'))
}