$(document).ready(function() {
	var nomes = ['Diego', 'Gabriel', 'Lucas'];
	
	nomes.forEach(element => {
        console.log('start');
        $("body").append('<li>'+element+'</li>');
    }); 
 
}); 

function adicionar() {
	var str_input = document.getElementById("str").value;
	console.log(str_input, str_input.length);
	//console.log(document.getElementById("str").value);
	$("body").append('<li>'+str_input+'</li>'); 
}
