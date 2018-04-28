function media(v1, v2) {
    var resultado = (v1*0.4)+(v2*0.6);
    return resultado; 
}

var resultado = media(5.2, 10);

if (resultado >= 7.0) {
    console.log('aprovado ' + resultado);
} else if (resultado >= 4 && resultado < 7.0 ) {
    console.log('vs ' + resultado);
} else {
    console.log('reprovado ' + resultado);  
}

 