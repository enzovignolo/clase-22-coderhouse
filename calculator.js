const calculator = (opString, n1, n2) => {
	try {
		if (!'+-/*'.includes(opString)) {
			throw new Error('Operation not supported');
		}
		if (opString == '/' && n2 == 0) {
			throw new Error('Can not divide by 0');
		}
		return eval(`${n1}${opString}${n2}`);
	} catch (error) {
		throw error;
	}
};

module.exports = calculator;
