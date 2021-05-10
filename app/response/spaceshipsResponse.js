'use strict'

module.exports = class SpaceshipsResponse {
    static to(obj, paradas) {
        return {
            nome: (typeof obj.name !== 'undefined') ? obj.name : null,
            paradas: (typeof paradas !== 'undefined') ? paradas : null
        }
    }
}