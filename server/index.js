const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const router = require('./router');

const app = express();

// app.use(favicon(path.join(__dirname, './assets/favicon.ico')));
// app.use('/public/', express.static(path.join(__dirname, './assets/public')));

app.use('/api', router);

// app.use((req, res) => {
//   fs.readFile(path.join(__dirname, './assets/index.html'), 'utf-8', (err, data) => {
//     if (err) return res.json({ code: 1, message: 'server error' });
//     return res.send(data);
//   });
// });

app.listen(3001, () => {
  console.log('server start at port 3001');
});
