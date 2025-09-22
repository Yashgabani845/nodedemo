const express = require('express');
const router = express.Router();
const { getTest, postTest } = require('../controllers/testController');

router.get('/test', getTest);
router.post('/test', postTest);

module.exports = router;