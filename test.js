var assert = require('assert')
var xor = require('./xor')

var secret = 'secret'
var value = '1024'

var encrypted = xor.encrypt(value, secret)

console.log(encrypted)
assert(encrypted === 'QlVRRg==')
assert(xor.decrypt(encrypted, secret) === value)

console.log('test pass!')
