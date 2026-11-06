
const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController.js');

router.get('/', pageController.home);

module.exports = router;
