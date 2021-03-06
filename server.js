const express = require('express');
const next = require('next');
const routes = require('./routes');
const compression = require('compression')

const PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 8443;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
// const handle = app.getRequestHandler();

const handler = routes.getRequestHandler(app);

// We are passing our server to application (app) of next js.
app.prepare()
.then(() => {
  //server creation
  const server = express();

  if (process.env.NODE_ENV === "production") {
      server.use( compression() );
  }
  server.use(handler);

  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})


// // server.js
// const next = require('next')
// const routes = require('./routes')
// const app = next({dev: process.env.NODE_ENV !== 'production'})
// const handler = routes.getRequestHandler(app)
//
//
// // Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//     createServer(handler).listen(3000)
// })
