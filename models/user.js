const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    OtpForrest: {
      type: String,
     
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
