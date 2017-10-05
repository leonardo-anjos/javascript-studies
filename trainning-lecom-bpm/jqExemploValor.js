$(document).ready(function() {
	
	atos.repeticao("$VALOR").addEvent(atos.elemCampo, 'blur', function(e){
		calculaTotal();
	});

	atos.campo("$CAMPO1").valor("");

	atos.campo("$NOME").addEvent(atos.elemCampo, 'change', function() {
		CarregaCampos();
	})
});

function calculaTotal(){
	var soma = 0;	
	for (var i = 1; i <= 10; i++) {
		var indice = i < 10 ? '0'+i : i;
		if(atos.campo("$VALOR_"+indice).existe()){
			soma = toNumber(atos.campo("$VALOR_"+indice).valor()) + toNumber(soma);
		}else{
			break;
		}
	}

	if(soma > 100){
		alert("Teste");
	}

	atos.campo("$TOTAL").valor(formatarValor(soma.toFixed(2)));

}

function CarregaCampos(){
	$.ajax({
			type: 'post',
			url: 'app/public/exemploRetornoJson',
			success: function(retorno) {
				atos.campo("$CAMPO1").valor(retorno.campo1);
				atos.campo("$CAMPO2").valor(retorno.campo2);
			},
			async: false
		}
	);

}