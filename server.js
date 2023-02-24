const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
