function* numbersGenerators() {
	yield 5;
	yield 7;
	return 11;
}

const numbersInterator = numbersGenerators();

// const firstIteraction = numbersInterator.next();
// const secondIteraction = numbersInterator.next();
// const thirdIteraction = numbersInterator.next();

// console.log('firstIteraction', firstIteraction);
// console.log('secondIteraction', secondIteraction);
// console.log('thirdIteraction', thirdIteraction);

// fibonacci function
// function fib() {}

function fakeGenerator() {
	const values = [5, 7, 11];
	let index = 0;

	return {
		next: function() {
			const iteration = {
				value: values[index],
				done: (index === values.length - 1)
			}
			index++;
			return iteration;
		}
	}
}

const fakeIterator = fakeGenerator();

const firstIteraction = fakeIterator.next();
const secondIteraction = fakeIterator.next();
const thirdIteraction = fakeIterator.next();

console.log('firstIteraction', firstIteraction);
console.log('secondIteraction', secondIteraction);
console.log('thirdIteraction', thirdIteraction);
