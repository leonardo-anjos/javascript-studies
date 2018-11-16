function doHomework(subject) {
	console.log(`Starting my ${subject} function`);
}

// doHomework('call-back');

function doHomework(subject, callback) {
	console.log(`Starting my ${subject} homework.`);
	callback();
}

doHomework('math', function() {
	console.log('Finished my homework');
});

doHomework('math', alertFinished);