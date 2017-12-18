const assert = require('assert')
const randomArr = require('../index')

describe('randomArray', function() {
  let randomResult
  after(checkResult)

  function checkResult() {
    const arr = [...new Set(randomResult)]
    const isCorrect = randomResult.length === arr.length

    assert.equal(isCorrect, true)
    randomResult = null
  }

  it('should work correctly while parameter is string number', function() {
    randomResult = randomArr('3')
    
    assert.equal(randomResult.length, 3)
  })

  it('should work correctly while parameter is float number', function() {
    randomResult = randomArr(3.1)
    
    assert.equal(randomResult.length, 3)
  })

  it('should throw exception while parameter is larger than 30 or smaller than 1', function() {
    assert.throws(randomArr.bind(this, 33), Error, `Invalid parameter, should be between 1 and 30`)

    assert.throws(randomArr.bind(this, 0), Error, `Invalid parameter, should be between 1 and 30`)

    randomResult = randomArr(3)
  })

  it('should throw exception while parameter is invalid', function() {
    // check max
    assert.throws(randomArr.bind(this, 33), Error, `Invalid parameter, should be between 1 and 30`)

    // check min
    assert.throws(randomArr.bind(this, 0), Error, `Invalid parameter, should be between 1 and 30`)

    // check parameter type
    assert.throws(randomArr.bind(this, []), Error, `Invalid type of parameter, should be integer number`)

    assert.throws(randomArr.bind(this, true), Error, `Invalid type of parameter, should be integer number`)

    assert.throws(randomArr, Error, `Invalid type of parameter, should be integer number`)

    assert.throws(randomArr.bind(this, {}), Error, `Invalid type of parameter, should be integer number`)

    randomResult = randomArr(3)
  })


  it('should work correctly in different parameters', function() {
    randomResult = randomArr(30)
    assert.equal(randomResult.length, 30)
    checkResult()

    randomResult = randomArr(1)
    assert.equal(randomResult.length, 1)
    checkResult()

    randomResult = randomArr(23)
    assert.equal(randomResult.length, 23)

    randomResult = randomArr(11)
  })
})
