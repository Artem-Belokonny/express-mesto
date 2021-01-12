const router = require('express').Router();

const userRoutes = require('./users');
const cardRoutes = require('./cards');
const pageNotFoundRoutes = require('./pageNotFound');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('*', pageNotFoundRoutes);

module.exports = router;
