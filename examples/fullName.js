import {
  curry,
} from 'core.lambda'

import {
  Just,
  Nothing,
} from 'data.maybe'

import {
  Left,
  Right,
} from 'data.either'

const map = (fn, functor) => functor.map(fn)
const initial = string => string.split('')[0]

const fullName = curry(3, (first, middle, last) =>
  `${last} ${initial(middle)}. ${first}`
)

const fullNameM = curry(3, (first, middle, last) =>
  map(fullName, first)
    .ap(middle)
    .ap(last)
)

/**
 * Maybe
 */
console.log(
  fullNameM(Nothing(), Just('R'), Just('Dickens'))
    .toString())
// => Nothing 

/**
 * Either 
 */
console.log(
  fullNameM(Right('Phil'), Left('Missing Middle Name'),  Right('Lopez'))
    .toString())
// => Left(Missing Middle Name)
