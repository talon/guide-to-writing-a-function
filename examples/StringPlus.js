/**
 * constructor
 */
function StringPlus (val) {
  this.val = val
}

/**
 * .map
 */
StringPlus.prototype.map = function (f) {
  return new StringPlus(f(this.val)) 
}

/**
 * .ap
 */
StringPlus.prototype.ap = function (b) {
  return new StringPlus(this.val(b.val))
}

/**
 * .toString
 */
StringPlus.prototype.toString = function () {
  return `StringPlus(${this.val})`
}

export default a => new StringPlus(a)
