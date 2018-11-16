var test = new XMLHttpRequest();

test.open('GET', 'https://api.github.com/users/leonardo-anjos');
test.send(null);

test.onreadystatechange = function() {
    if (test.readyState == 4) {
        console.log(JSON.parse(test.responseText));        
    }
}