const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);

module.exports = app;