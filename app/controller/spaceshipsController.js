'use strict';
const SpaceshipsService = require('../service/spaceshipsService');

module.exports.getStops = async function (req, res) {
    const service = new SpaceshipsService();
    service.getStops(req, res);
}