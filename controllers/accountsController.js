const Account = require("../models/accountSchema");

// create an account
const createAnAccount = async (req, res) => {
  const newAccount = new Account({
    username: req.body.username,
    email: req.body.email,
    dob: req.body.dob,
    password: req.body.password,
  });

  await newAccount.save();
  res.status(201).json(newAccount);
};

// get all accounts
const getAllAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

//get an account
const getAnAccount = async (req, res) => {
  const account = await Account.findById(req.params._id);
  res.json(account);
};

// update an account
const updateAnAccount = async (req, res) => {
  const foundAccount = await Account.findById(req.params._id);
  if (foundAccount) {
    (foundAccount.userame = req.body.username
      ? req.body.username
      : foundAccount.username),
      (foundAccount.email = req.body.email
        ? req.body.email
        : foundAccount.email),
      (foundAccount.dob = req.body.dob ? req.body.dob : foundAccount.dob),
      (foundAccount.password = req.body.password
        ? req.body.password
        : foundAccount.password);

    const updatedAccount = await foundAccount.save();
    res.json({ updatedAccount });
  }
};

//delete an account
const deleteAnAccount = async (req, res) => {
  const foundAccount = await Account.findById(req.params._id);
  if (foundAccount) {
    foundAccount.remove();
    res.json({ msg: ` ${foundAccount.name} removed` });
  } else {
    res.status(404).json({ error: "account not found" });
  }
};

module.exports = {
  createAnAccount,
  getAllAccounts,
  getAnAccount,
  updateAnAccount,
  deleteAnAccount,
};
