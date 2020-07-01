const express = require('express');
const authRoute = require('./auth.route');
const transactionRoute = require('./transaction.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/transaction', transactionRoute);

module.exports = router;
