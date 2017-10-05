$(document).ready(function(){
	atos.campo("$NOME").css(atos.elemLabel,{'color':'green'});
	
	atos.repeticao("$VLR_DESPESA").addEvent(atos.elemCampo, 'blur', function(e){
		somaValorDespesas();
	});

	atos.campo("$NOME").addEvent(atos.elemCampo,'retornoLupa',function(e){
		carregaValores();
	});
});

function somaValorDespesas(){
	var valorDespesa = 0;
	var valorTotalDespesas = 0;
	for(var i = 1; i <= 50 ; i++){
		if (i <= 9){
			valorDespesa = toNumber(atos.campo("$VLR_DESPESA_0"+i).valor());
		} else {
			valorDespesa = toNumber(atos.campo("$VLR_DESPESA_"+i).valor());
		}
		valorTotalDespesas += valorDespesa;
	}
	atos.campo("$VLR_TOTAL_DESPESAS").valor(formatarValor(valorTotalDespesas.toFixed(2)));	
};


function carregaValores(){
	var nome = atos.campo("$NOME").valor();
	$.ajax({
			type: 'post',
			data:	"nomeUser=" + nome,
			url: 'app/public/exemploRetornoJson&action=trazInfoUser',
			success: function(retorno) {
				atos.campo("$CPF").valor(retorno.cpf);
				atos.campo("$COD_ERP").valor(retorno.erp);
			},
			async: false
	});



}