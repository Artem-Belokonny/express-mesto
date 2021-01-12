const router = require('express').Router();
const controller = require('../controllers/pageNotFound.js');

router.get('/', controller.getPageNotFound);

module.exports = router;
