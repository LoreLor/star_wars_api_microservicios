const modelData = require('../models');
const response = require('../utils');

module.exports = async(req, res) => {
    const { model, _id } = req.params;

    const result = await modelData[model].get(_id);
    response(res, 200, result);
}