const express = require('express');
const spaceships = require('./spaceshipsRouter');
const router = express.Router();

router.use('/spaceships', spaceships);

module.exports = router;