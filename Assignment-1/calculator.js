const operation = process.argv[0]
const a = Number(process.argv[1])
const b = Number(process.argv[2])

if (!operation || Number.isNaN(a) || Number.isNaN(b)) {
  console.log('Usage: node calculator.js add 10 5')
  process.exit(1)
}

let result

if (operation === 'add') result = a + b
else if (operation === 'subtract') result = a - b
else if (operation === 'multiply') result = a * b
else if (operation === 'divide') {
  if (b === 0) {
    console.log('Cannot divide by zero')
    process.exit(1)
  }
  result = a / b
} else {
  console.log('Invalid operation')
  process.exit(1)
}

console.log('Result:', result)
