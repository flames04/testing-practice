// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum(number1 = 0, number2 = 0) {
	return number1 + number2;
}
function difference(number1 = 0, number2 = 0) {
  return number1 - number2;
}
function product(number1 = 0, number2 = 1) {
  return number1 * number2;
}
function quotient(number1 = 0, number2 = 1) {
  if  (number2 ===0) return `ERROR`;
  return number1 / number2;
}
function calc (operation, number1, number2){
  switch (operation) {
    case 'add': return sum(number1, number2)
  }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
