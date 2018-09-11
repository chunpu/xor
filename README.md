@chunpu/xor
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/@chunpu/xor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@chunpu/xor
[downloads-image]: http://img.shields.io/npm/dm/@chunpu/xor.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/@chunpu/xor
[david-image]: http://img.shields.io/david/chunpu/xor.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/xor


XOR Encrypt and Decrypt, Support utf-8

Installation
---

```sh
npm i @chunpu/xor
```

Usage
---

```js
const xor = require('@chunpu/xor')
```

Api
---

- `xor.encrypt(value, secret)`
- `xor.decrypt(str, secret)`

Example
---

```js
var secret = 'secret'
var value = '1024'

console.log(xor.encrypt(value, secret))
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/@chunpu/xor.svg?style=flat-square
[license-url]: #
