const express = require('express');
const router = express.Router();

const tintucController = require('../app/controllers/TintucController');

router.use('/', tintucController.index);

module.exports = router;