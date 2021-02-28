const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config({ path: path.resolve(__dirname.concat('/../.env')) });

const port = process.env.APP_PORT;

require('./app/controllers/controller')(app);

app.listen(port, () => console.log(`Server listening in port ${port}`));