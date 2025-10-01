const express = require("express");
const router = express.Router();

// DUMMY DATA
const admins = require("../admins.json");
const employees = require("../employees.json");

router.post("/admin", (req, res) => {
  const { email, password } = req.body;

  const foundAdmin = admins.find(
    (admin) => admin.email === email && admin.password === password
  );
  if (foundAdmin) {
    return res.status(200).json({ message: "Admin Login successful", success: true });
  } else {
    return res.status(401).json({ message: "Admin Login failed", success: false });
  }
});

router.post("/employee", (req, res) => {
  const { email, password } = req.body;

  const foundEmployee = employees.find(
    (employee) => employee.email === email && employee.password === password
  );
  if (foundEmployee) {
    return res.status(200).json({ message: "Employee Login successful", success: true });
  } else {
    return res.status(401).json({ message: "Employee Login failed", success: false });
  }
});

module.exports = router;
