function addList() {

    var nomes = ['Diego', 'Gabriel', 'Lucas'];

    nomes.forEach(element => {
        //console.log(element);
        $("body").append('<li>'+element+'</li>');
    });        
}