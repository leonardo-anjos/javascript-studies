function valida_idade(campo,obrigatorio){
	var idade = atos.campo("$IDADE").valor();

	if(idade  < "18"){
		atos.configurarBotao(atos.elemBotaoAprova, { display : 'none' });
	} else {
		atos.configurarBotao(atos.elemBotaoAprova, { display : 'block' });
	}
}


