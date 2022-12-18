const createComment = (item) => {

    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(response => response.json())
};

export {createComment};
