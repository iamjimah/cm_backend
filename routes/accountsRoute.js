const express = require("express");
const {
  createAnAccount,
  getAllAccounts,
  getAnAccount,
  updateAnAccount,
  deleteAnAccount,
} = require("../controllers/accountsController");

//const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(createAnAccount).get(getAllAccounts);
router
  .route("/:_id")
  .get(getAnAccount)
  .put(updateAnAccount)
  .delete(deleteAnAccount);

module.exports = router;
