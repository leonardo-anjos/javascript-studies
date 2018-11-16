var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var test = new XMLHttpRequest();
        test.open('GET', 'https://api.github.com/users/leonardo-anjos');
        test.send(null);

        test.onreadystatechange = function() {
            if (test.readyState == 4) {
                // console.log(JSON.parse(test.responseText));        
                if (test.status == 200) {
                    resolve(JSON.parse(test.responseText));
                } else {
                    reject('erro na requesição');
                }
            }
        }
    });
}

myPromise() 
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });