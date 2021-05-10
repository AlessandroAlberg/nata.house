const express = require('express');
const spaceships = require('../controller/spaceshipsController');

const router = express.Router();

router.route('/').get(spaceships.getStops);

module.exports = router;