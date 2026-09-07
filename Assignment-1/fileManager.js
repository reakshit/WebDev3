const fs = require('fs')
const path = process.argv[2] || 'test.txt'
const action = process.argv[3]
const text = process.argv.slice(4).join(' ') || 'Hello from Node.js'

if (!action) {
  console.log('Usage: node fileManager.js test.txt create "some text"')
  process.exit(1)
}

if (action === 'create') {
  fs.writeFile(path, text, function (error) {
    if (error) console.log('Error:', error.message)
    else console.log('File created')
  })
} else if (action === 'read') {
  fs.readFile(path, 'utf8', function (error, data) {
    if (error) console.log('Error:', error.message)
    else console.log(data)
  })
} else if (action === 'update') {
  fs.appendFile(path, '\n' + text, function (error) {
    if (error) console.log('Error:', error.message)
    else console.log('File updated')
  })
} else if (action === 'delete') {
  fs.unlink(path, function (error) {
    if (error) console.log('Error:', error.message)
    else console.log('File deleted')
  })
} else {
  console.log('Invalid action')
}
