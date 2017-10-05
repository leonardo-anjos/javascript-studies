function validaHora(campo,obrigatorio){
	var hora = atos.campo("$HORA").valor();
	if(hora  == "22:00"){
		alert("Horario nao permitido.Ajuste ele!");
		return false;
	}
	return true;
}