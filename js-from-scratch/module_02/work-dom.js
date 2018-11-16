//var inputElement = document.getElementById('name');
//var inputElement = document.getElementsByTagName('input');
//var inputElement = document.getElementsByClassName('nome');
//var inputElement = document.querySelector('div#app input');

var btnElemen, inputElement;

show = function () {
    btnElement = document.querySelector('button.botao'); 
    inputElement = document.querySelector('input[name=nome]');  
    
    //console.log(inputElement);

    var text = inputElement.value;
    //alert('botao clicado!');
    alert(text);
    
}


