# evented-viewport

[![evented-viewport on NPM](https://img.shields.io/npm/v/evented-viewport.svg?style=flat-square)](https://www.npmjs.com/package/evented-viewport) [![evented-viewport Downloads on NPM](https://img.shields.io/npm/dm/evented-viewport.svg?style=flat-square)](https://www.npmjs.com/package/evented-viewport) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

## Install

```sh
$ npm i evented-viewport --save
```

## Usage

Pass `evented-viewport` an options object with `debounce` and `emitter` properties:

```javascript
import knot from 'knot.js'
import viewport from 'evented-viewport'

// have your emitter handy (create or import one)
const emitter = knot()

// (optionally) subscribe to the resize event
// note that all handlers will be passed an object containing the viewport width/height
emitter.on('resize', viewport => {
  console.log(`width: ${ viewport.width }`)
  console.log(`height: ${ viewport.height }`)
})

// define your options
const options = {
  debounce: 250,          // time, in ms, that must pass before updating the viewport width/height on resize
  emitter                 // object with an "emit" method
}

// create an instance (should be a singleton)
const instance = viewport(options)

// export (and enjoy in other modules)
export default instance
```

## See Also

* [knot.js](https://github.com/callmecavs/knot.js) - A browser-based event emitter, for tying things together.

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
