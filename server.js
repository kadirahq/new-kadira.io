const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    app.render(req, res, '/', {})
  })

  server.get('/blog*', redirectToOld)
  server.get('/platform*', redirectToOld)
  server.get('/academy*', redirectToOld)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

function redirectToOld (req, res) {
  const newUrl = `https://old.kadira.io${req.url}`
  res.redirect(301, newUrl)
}
