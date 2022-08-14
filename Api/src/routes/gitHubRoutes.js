const express = require('express');
const controller = require('../controller/gitHubController');

const router = express.Router();

router.get('/avatar', controller.getAvatar);
router.get('/repo', controller.getRepository);

module.exports = router;
