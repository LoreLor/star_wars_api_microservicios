// me traigo el index de los modelos
const modelData = require('../models');
const response = require('../utils/response');

module.exports = async(req, res) => {
    const { model } = req.params;
    const result = await modelData[model].list();
    response(res, 200, result);
}