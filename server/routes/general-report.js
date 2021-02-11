const express = require('express');
const controller = require('../controllers/generalReport');

const router = express.Router();

router.get('/', controller.getGeneralReport);

module.exports = router;
