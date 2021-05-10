'use strict'
const axios = require('axios');
const SpaceshipsResponse = require('../../response/spaceshipsResponse')
const SpaceshipsUtils = require('../../utils/stopUtils')

module.exports = class SpaceshipsBO {
    constructor() {
    }

    async getStops(param) {
        let result = await axios.get('https://swapi.dev/api/starships');
        return result.data.results.map(item => {
            let paradas = SpaceshipsUtils.stops(item, param);
            return SpaceshipsResponse.to(item, paradas)
        });
    }
}