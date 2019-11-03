const express = require('express');
const router = require('./router');

const app = express();

app.use('/api', router);

// app.use((req, res) => {
//   console.log(req.query)
//   const { jsonpCallback } = req.query
//   res.setHeader('Content-type', 'application/x-javascript;charset=utf-8')
//   res.send(`${jsonpCallback}('hello world')`)
// })

app.listen(3000, () => {
  console.log('server start at port 3000');
});
