// middleware para generarme validadores para sobreescribir el 
// 500 que viene por defecto, me traigo CientError de la carpeta error en utils
// la ruta post

const { ClientError } = require("../utils/errors");


module.exports = (req, res, next) => {
    const { name } = req.body;
    if(name) return next();
    else throw new ClientError('Planet name is not found', 404);
}