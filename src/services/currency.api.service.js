const getCurrency = () => {
    return fetch('https://api.exchangerate.host/latest')
        .then(response => response.json());
}

export {getCurrency};