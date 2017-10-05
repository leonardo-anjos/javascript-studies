$(document).ready(function() {

	if(document.form) {
		//Definindo cor e tamanho para titulo
		$(".titleProc").css("color", "#8F5959");
		$(".titleProc").css("font-size", "20px");

		var codEtapa = atos.codigoEtapa;
		if(codEtapa == 1){

			atos.campo("$AREA").addEvent(atos.elemCampo, 'change', function(e){
				acao();
			});
		}

	}
});

function acao(){
	var area = atos.campo("$AREA").valor();
	if(area == "MKT"){
		atos.campo("$CAMPO2").valor(1);
	}

	if(area == "PSP"){
		atos.campo("$CAMPO2").valor(2);
	}

}