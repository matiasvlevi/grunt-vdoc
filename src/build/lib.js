/**
 * @method add
 * A method that returns the sum of two arguments
 * @param {Number} x The first number
 * @param {Number} y The second number
 * @return {Number} the sum of the two numbers
 */
function add(x, y) {
  return x + y;
}

/**
 * @method mult
 * A method that multiplies two argument toghether.
 * @param {Number} x The first number
 * @param {Number} y The second number
 * @return {Number} the multiplied number
 */
function mult(x, y) {
  return x * y;
}

/**
 * @class TestClass
 * @constructor
 * A class that multiplies two argument toghether.
 * @param {Number} x The first number
 * @param {Number} y The second number
 */
class TestClass {
  constructor(x, y) {
    this.ans = x * y;
  }
}

/**
 * @method log
 * A method that logs the property of testclass
 */
TestClass.prototype.log = function log(x, y) {
  console.log(this.ans);
}

/**
 * @class TestClass2
 * @constructor
 * A class that adds two argument toghether.
 * @param {Number} x The first number
 * @param {Number} y The second number
 * @prop {Number} x the saved x value
 * @prop {Number} y the saved y value
 */
class TestClass2 {
  constructor(x, y) {
    this.ans = x + y;
    this.x = x;
    this.y = y;
  }
}

/**
 * @method log
 * A method that logs the property of testclass
 * @example
 * <code>
 * let t = new TestClass2(3, 4);
 * t.log();
 * </code>
 * @example
 * <code>
 * let v = new TestClass2(3, 4);
 * v.log();
 * </code>
 * @chainable
 */
TestClass2.prototype.log = function log(x, y) {
  console.log(this.ans);
}

/**
 * @method mult2
 * A method that multiplies two argument toghether.
 * @param {Number} x The first number
 * @param {Number} y The second number
 * @return {Number} the multiplied number
 */
function mult2(x, y) {
  return x * y;
}