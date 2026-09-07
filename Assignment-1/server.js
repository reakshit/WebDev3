const http = require('http')

const port = process.argv[2] || 3000

const server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  res.setHeader('Content-Type', 'text/plain')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Welcome message')
  } else if (req.url === '/about') {
    res.statusCode = 200
    res.end('About page')
  } else if (req.url === '/contact') {
    res.statusCode = 200
    res.end('Contact page')
  } else {
    res.statusCode = 404
    res.end('404 Error Message')
  }
})

server.listen(port, function () {
  console.log('Server running at http://localhost:' + port)
})
