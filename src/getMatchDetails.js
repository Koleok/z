const reflector = require('js-function-reflector')

const isBabel = !(class {}.toString().indexOf('class ') === 0)

const functionReflector = isBabel
  ? reflector.compiler('babel-preset-es2015')
  : reflector

module.exports = func => {
  const reflectedFunction = functionReflector(func)

  return {
    args: reflectedFunction.args,
    func,
  }
}
