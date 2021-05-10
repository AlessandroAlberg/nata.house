'use strict'

module.exports = {

    stops(item, param) {
        let mglt = item.MGLT;
        let consumiveis = item.consumables.split(" ");
        let days = formatDate(consumiveis);
        let result = parseInt(param / (mglt * days * 24))
        return result;
    }
    
}

const formatDate = (param) => {
    let date = param[0];
    let type = param[1];

    if(type === 'year' || type === 'years') {
        return (date * 365);
    } else if(type === 'month' || type === 'months') {
        return (date * 30);
    } else if(type === 'week' || type === 'weeks') {
        return (date * 7); 
    } else if(type === 'day' || type === 'days') {
        return date;
    }
}