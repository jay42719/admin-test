const mongoose = require("mongoose");

const schema = {
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  amount: {
    type: String,
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

const taskSchema = new mongoose.Schema(schema, options);
module.exports = mongoose.model("task", taskSchema);
