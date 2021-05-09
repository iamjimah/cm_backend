const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
