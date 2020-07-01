const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const transactionRoute = require('./transaction.route');
const docsRoute = require('./docs.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/transaction', transactionRoute);
router.use('/docs', docsRoute);

module.exports = router;
