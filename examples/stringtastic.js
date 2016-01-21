import StringPlus from './StringPlus'
import {
  curry,
} from 'core.lambda'

const map = (fn, functor) => functor.map(fn)

/**
 * Map
 */
const hello = StringPlus('hello world')

const punctuate = curry(2, (punctuation, message) => message + punctuation)

const exclaim = punctuate('!')

console.log(map(exclaim, hello).toString())


/**
 * Apply
 */
const greet = curry(2, (nameA, nameB) => `"Hello ${nameB}!", said ${nameA}`)

const rachel = StringPlus('Rachel')
const sara = StringPlus('Sara')

console.log(map(greet, rachel).ap(sara).toString())
