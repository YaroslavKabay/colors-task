import {usersURL} from '../constants' ;


const createUser = (item) => {

    return fetch(usersURL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(response => response.json())
};

export {createUser};






