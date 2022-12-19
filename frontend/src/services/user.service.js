const createUser = (item) => {

    return fetch("http://localhost:4444/users", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(response => response.json())
};

export {createUser};






