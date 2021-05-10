'use strict';
const SpaceshipsBO = require('../domain/business/spaceshipsBO')

module.exports = class SpaceshipsService {
    constructor() {
        this._bo = new SpaceshipsBO();
    }

    async getStops(req, res) {
        try {
            let distancia = req.body.distancia;
            let result = await this._bo.getStops(distancia);
            res.status(200).json(result);
        } catch (error) {
            throw new Error(error);
        }
    }
}