const joi = require("joi");

//validation
const validateAddUser = new joi.object({
  username: joi.string().min(4).max(15).required(),
  email: joi.string().min(10).max(200).email().required(),
  dob: joi.string().min(8).max(20).required(),
  password: joi.string().min(6).max(50).required(),
});

module.exports = { validateAddUser };
