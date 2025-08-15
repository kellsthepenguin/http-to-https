const { createServer } = require('http')
const server = createServer()

server.on('request', (req, res) => {
  const hostname = req.headers.host.split(':')[0]
  const to = new URL(req.url, `https://${hostname}`).href

  console.log(req.socket.localPort)

  if (req.socket.localPort === 80) {
    res.writeHead(301, { location: to })
    res.end()
  }
})

server.listen(80)
