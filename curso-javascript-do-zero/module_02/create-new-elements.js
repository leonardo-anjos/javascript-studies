d$(document).ready(function() {
    console.log('ok');
    
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', 'https://rocketseat.com.br');

    var textElement = document.createTextNode('acessar pagina da rocketseat');
    linkElement.appendChild(textElement);

    var containerElement = document.querySelector('#app');
    containerElement.appendChild(linkElement);
});