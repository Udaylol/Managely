const express = require("express");
const router = express.Router();

const { loginAsAdmin, loginAsEmployee } = require("../controllers/authController");

router.post("/admin", (req, res) => {
  const { email, password } = req.body;
  return loginAsAdmin(email, password, res);
});

router.post("/employee", (req, res) => {
  const { email, password } = req.body;
  return loginAsEmployee(email, password, res);
});

module.exports = router;
