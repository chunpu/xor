var _ = require('min-util')
var base64 = require('min-base64')
var byteCode = require('bytecode')

module.exports = exports = Xor

function Xor() {}

// 可能报错
Xor.decrypt = function(str, seed) {
  var bytes = base64.decodeToBytes(str)
  bytes = _.map(bytes, function(byte, i) {
    return byte ^ seed.charCodeAt(i % seed.length)
  })
  var ret = byteCode.encode(bytes)
  return ret
}

// 可能报错
Xor.encrypt = function(str, seed) {
  var bytes = byteCode.decode(str)
  bytes = _.map(bytes, function(byte, i) {
    return byte ^ seed.charCodeAt(i % seed.length)
  })
  var ret = base64.encodeBytes(bytes)
  return ret
}
