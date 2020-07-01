const express = require('express');
const auth = require('../../middlewares/auth');
const transactionController = require('../../controllers/transaction.controller');

const router = express.Router();

router.post('/deposit', auth('user'), transactionController.deposit);
router.post('/transfer', auth('user'), transactionController.transfer);

module.exports = router;
