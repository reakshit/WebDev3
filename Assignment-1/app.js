const isEven = require('./modules/isEven')
const log = require('./modules/logger')

const numbers = [4, 7, 10]

numbers.forEach(function (number) {
  log(number + ' is ' + (isEven(number) ? 'even' : 'odd'))
})
