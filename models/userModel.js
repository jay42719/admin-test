const mongoose = require("mongoose");

const schema = {
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
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

const userSchema = new mongoose.Schema(schema, options);
module.exports = mongoose.model("user", userSchema);