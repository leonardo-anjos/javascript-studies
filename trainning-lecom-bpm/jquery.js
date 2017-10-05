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
	
	}
	
});