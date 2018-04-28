axios.get('https://api.github.com/users/leonardo-anjos') 
    .then(function(response) {
        console.log(response);
        // console.log(repsonse.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });