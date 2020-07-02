const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { transactionService } = require('../services');

/**
 * eWallet Deposit
 * @public
 */
const deposit = catchAsync(async (req, res) => {
  const depositResponse = await transactionService.deposit(req.user, req.body.amount);
  res.status(httpStatus.ACCEPTED).json(depositResponse);
});

/**
 * eWallet Transfer
 * @public
 */
const transfer = catchAsync(async (req, res) => {
  const transferResponse = await transactionService.transfer(req.user, req.body.amount, req.body.email);
  res.status(httpStatus.ACCEPTED).json(transferResponse);
});

/**
 * eWallet Transactions
 * @public
 */
const getTransactions = catchAsync(async (req, res) => {
  const transferResponse = await transactionService.getTransactions(req.user);
  res.status(httpStatus.ACCEPTED).json(transferResponse);
});

module.exports = {
  deposit,
  transfer,
  getTransactions,
};
