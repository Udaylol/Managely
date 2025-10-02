const express = require("express");
const router = express.Router();

const admins = require("../admins.json");
const employees = require("../employees.json");

router.get("/manage", (req, res) => {
  if (admins) {
    return res
      .status(200)
      .json({ message: "Fetched all admins", success: true, data: admins });
  } else {
    return res
      .status(401)
      .json({ message: "Failed to fetch admins", success: false });
  }
});

router.get("/manage/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const admin = admins.find((a) => a.id === id);
  if (admin) {
    res.status(200).json({
      message: "Fetched admin details",
      success: true,
      data: admin,
    });
  } else {
    res.status(404).json({
      message: "Admin not found",
      success: false,
    });
  }
});

router.get("/manage/email", (req, res) => {
  const email = req.query.email;
  const admin = admins.find((a) => a.email === email);
  if (admin) {
    res.status(200).json({
      message: "Fetched admin details",
      success: true,
      data: admin,
    });
  } else {
    res.status(404).json({
      message: "Admin not found",
      success: false,
    });
  }
});

module.exports = router;