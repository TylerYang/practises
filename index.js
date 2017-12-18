const debug = require('util').debuglog('random')

const MIN = 2
const MAX = 31

// randomArr returns non-repeat random array contains n elements,
// each element should between [MIN, MAX]
function randomArray(n) {
  if (typeof n !== 'string' && typeof n !== 'number') {
    throw new Error('Invalid type of parameter, should be integer number')
  }
  if (typeof n === 'string' || (n % 1) > 0) {
    debug(`Incorrect parameter, required integer, but got '${extractType(n)}'`)
    n = parseInt(n, 10)
  }

  if (n < 1 || n > MAX - MIN + 1) {
    throw new Error(`Invalid parameter, should be between 1 and ${MAX - MIN + 1}`)
  }
  const set = new Set()

  for (let i = 0; i < n; i++) {
    let num = randomBetween(MIN, MAX)
    while (set.has(num)) {
      debug(`got repeated element: ${num}, current set.length: ${set.size}`)
      
      num = randomBetween(MIN, MAX)
    }
    set.add(num)
  }

  return [...set]
}

console.log(randomArray(30))

module.exports = randomArray

// randomBetween returns random value between [min, max].
function randomBetween(min = 2, max = 31) {
  return Math.round(min + Math.random() * (max - min))
}

// extractType returns number type of element or just typeof result.
function extractType(n) {
  if (typeof n !== 'number') {
    return typeof n
  } else {
    return (n % 1) === 0 ? 'int': 'float'
  }
}
