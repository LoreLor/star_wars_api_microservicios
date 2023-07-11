// este controlador va en el index del controller para manejar loa try catch

module.exports = (fnController) => {
    return (req, res, next) => {
        fnController(req, res).catch((err) => {
            next(err);
        })
    }
}