$(document).ready(function() {

	if(document.form) {
		//Titulos =================
		$(".titleProc").css("color", "#8F5959");
		$(".titleProc").css("font-size", "20px");
		if(document.form.sCodEtapa) $(".titleProc").css("width", "700px");
		$(".titleProc").css("padding", "15px 0 10px 0");
		$(".titleProc").css("text-align", "center");

		//SubTitulos =================
		$(".subTitle").css("color", "#3B859F");
		$(".subTitle").css("font-size", "15px");
		$(".subTitle").css("padding", "10px 0 4px 0");
		$(".subTitle").css("text-align", "center");
		
		var codigoEtapa = atos.codigoEtapa;
		if(codigoEtapa == 1){
			atos.campo("$CAMPO1").css(atos.elemCampo,{'border-left':'7px solid #3B859F'});
			
			atos.campo("$CAMPO1").addEvent(atos.elemCampo, 'change', function(e){
				funcao();
			});
			
			//Refaz o onclick do botão
			atos.campo("$NOME_CLIENTE").addEvent(atos.elemCampo, 'retornoLupa', function() {
				CarregaCampos();
			});
			
			atos.repeticao('$EMAIL_OUTROS').addEvent(atos.elemBotaoAdiciona, 'retornoAdicionarRepeticao', function(e, indice) { 
				//fazer o que necessário após o "+" da repeticao.
			});


			atos.repeticao("$VALOR").addEvent(atos.elemCampo,'blur',function(e){		
				calculaTotalPerc();
			});
		}
	}
});

function calculaTotalPerc(){
	var soma = 0;
	var qtdDig = 0;
	for (var i = 1; i <= 10; i++) {
		var indice = i < 10 ? '0'+i : i;
		if(atos.campo("$VALOR_"+indice).existe()){
			soma = toNumber(atos.campo("$VALOR_"+indice).valor()) + toNumber(soma);
			qtdDig++;
		}
	}

	for (var i = 1; i <= qtdDig; i++) {
		var indice2 = i < 10 ? '0'+i : i;
		if(atos.campo("$PERC_"+indice2).existe()){
			var perc = toNumber(atos.campo("$VALOR_"+indice2).valor())*100/soma;
			atos.campo("$PERC_"+indice2).valor(parseInt(perc));
		}
	}

	atos.campo("$TOTAL").valor(formatarValor(soma.toFixed(2)));
}

function funcao(){
	var valor = atos.campo("$CAMPO1").valor();
	if(valor == 'x'){
		atos.campo("$CAMPO2").escondeCampo();
		atos.campo("$CAMPO3").removeItemLista(); 
		atos.campo("$CAMPO3").adicionaItemLista(['','1','3','5','7','9']); 
	}
	
	if(valor == 'y'){
		atos.campo("$CAMPO2").mostraCampo();
		atos.campo("$CAMPO3").removeItemLista(); 
		atos.campo("$CAMPO3").adicionaItemLista(['','2','4','6','8','10']); 
	}
}

function CarregaCampos(){
	$.ajax({
			type: 'post',
			data:	"loginCliente=" + loginCliente,
			url: 'app/public/exemploRetornoJson',
			success: function(retorno) {
				atos.campo("$CAMPO3").valor(retorno.valor1);
				atos.campo("$CAMPO4").valor(retorno.valor2);
			},
			async: false
		}
	);

}