import {colorsURL} from '../constants' ;

const getColors = () => {

    return fetch(colorsURL, {
        method: 'GET',
    })
        .then(response => response.json())
};

export {getColors};






