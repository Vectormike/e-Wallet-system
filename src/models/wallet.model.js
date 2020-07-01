const mongoose = require('mongoose');
const { roles } = require('../config/roles');

const walletSchema = new mongoose.Schema(
  {
    walletId: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
