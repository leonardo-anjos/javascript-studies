function first() {
	setTimeout(function(){
			console.log('function1');
	}, 500 ); 
}

function second() {
	console.log('function2')
}

first();
second();