module.exports = (req, res, next) => {
    const { title } = req.body;

    if(title) return next();
    else throw new ClientError("Error en el nombre", 404);
}