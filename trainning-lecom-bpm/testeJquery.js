$(document).ready(function() {
		
	atos.campo("$NOME").addEvent(atos.elemCampo, 'change', function() {
		CarregaCampos();
	})

});


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