const mongoose = require("mongoose");

const schema = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  type: {
    type: String,
    enum: ['INCOME', 'EXPANSE'],
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  category: {
    type: String,
    enum: ['BUSINESS', 'OTHERS'],
    require: true
  },
  date_time: {
    type: Number,
    require: true
  },
  mode: {
    type: String,
    enum: ['CASH', 'DEBIT', 'CREDIT'],
    require: true
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
};
const options = {
  versionKey: false,
  toObject: {
    virtuals: true,
    transform: (doc, ret) => {},
  },
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    },
  },
};

const transactionSchema = new mongoose.Schema(schema, options);
module.exports = mongoose.model("transaction", transactionSchema);