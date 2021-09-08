const calculator = require(`${__dirname}/../calculator.js`);
describe('Testing calculator function', () => {
	test('add 2 and 3', () => {
		expect(calculator('+', 2, 3)).toEqual(5);
	});

	test('substract 178 from 100', () => {
		expect(calculator('-', 100, 178)).toEqual(-78);
	});

	test('multiply 5 and 9', () => {
		expect(calculator('*', 5, 9)).toEqual(45);
	});
	test('divide 10 and 2', () => {
		expect(calculator('/', 10, 2)).toEqual(5);
	});

	test('try to multiply string with a number', () => {
		expect(() => calculator('*', 'string', 4)).toThrow(Error);
	});

	test('input a wrong string as operator', () => {
		expect(() => calculator('e', 2, 2)).toThrow(
			'Operation not supported'
		);
	});

	test('try to perform an opertaion that is not supported', () => {
		const testFunction = () => calculator('%', 100, 10);
		expect(testFunction).toThrow(Error);
		expect(testFunction).toThrow('Operation not supported');
	});

	test('try to add 0 and 0', () => {
		expect(calculator('+', 0, 0)).toEqual(0);
	});

	test('try to substract 0 from 0', () => {
		expect(calculator('-', 0, 0)).toEqual(0);
	});

	test('try to multiply 0 by 0', () => {
		expect(calculator('*', 0, 0)).toEqual(0);
	});

	test('try to divide 0 by 0', () => {
		const testFunction = () => calculator('/', 0, 0);
		expect(testFunction).toThrow(Error);
		expect(testFunction).toThrow('Can not divide by 0');
	});
});
