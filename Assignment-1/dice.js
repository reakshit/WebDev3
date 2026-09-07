const crypto = require('crypto')

const count = Number(process.argv[2]) || 1

for (let i = 0; i < count; i++) {
  const roll = crypto.randomInt(1, 7)
  console.log('Dice Rolled:', roll)
}
