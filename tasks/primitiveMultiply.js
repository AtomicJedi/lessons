function MultiplicatorUnitFailure(message) {
	this.message = message;
	this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5)
		return a * b;
	else
		throw new MultiplicatorUnitFailure("Внимание! Всем оставатся на местах! Работает корейский рандом!!! ");
}

function reliableMultiply(a, b) {
	while(true) {
		try {
			return primitiveMultiply(a, b);
		} catch (error) {
			(error instanceof MultiplicatorUnitFailure) ? console.log(error.message) : console.log(error)
			}
		}
	}


console.log(reliableMultiply(8, 8));