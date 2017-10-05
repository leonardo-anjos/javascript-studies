$(document).ready(function() {
	
	$(".title").css("color", "#8F5959");
	$(".title").css("font-size", "20px");
	$(".title").css("width", "700px");
	$(".title").css("padding", "15px 0 10px 0");
	$(".title").css("text-align", "center");
	
	var codEtapa = atos.codigoEtapa;
	
	if(codEtapa == 1){
		
		atos.campo("$CAMPO").label("Este é um novo label");
		
		atos.campo("$TEMESTOQUE").addEvent(atos.elemCampo,'change',function(e){
			escondeMostraObs();
		});
		
		escondeMostraObs();
		
		atos.repeticao("$VALOR").addEvent(atos.elemCampo, 'blur', function(e){
			calculaTotal();
		});
		
		atos.repeticao("$VALOR").addEvent(atos.elemBotaoRemove,'retornoRemoverRepeticao'
		,function(e){
			calculaTotal();
		});
	}
	
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

	atos.campo("$TOTAL").valor(formatarValor(soma.toFixed(2)));

}



function escondeMostraObs(){
	var estoque = atos.campo("$TEMESTOQUE").valor();
	if(estoque == "Sim"){
		atos.campo("$OBS").escondeCampo();
		atos.configurarBotao(atos.elemBotaoAprova, {display:'block',
		label : 'novo aprovar' });
	}else{
		atos.campo("$OBS").mostraCampo()
		atos.configurarBotao(atos.elemBotaoAprova, { display : 'none' });
	}
}
