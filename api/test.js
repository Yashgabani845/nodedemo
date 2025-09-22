const express = require('express');
const bodyParser = require('body-parser');
const { getTest, postTest } = require('../controllers/testController');

const app = express();
app.use(bodyParser.json());

app.get('/api/test', getTest);
app.post('/api/test', postTest);

// Export the handler for Vercel
module.exports = app;
