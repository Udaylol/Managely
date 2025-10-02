const express = require("express");
const router = express.Router();
const { getAdminById, getAdminByEmail , getAllAdmins } = require("../controllers/adminController");


router.get("/manage", (req, res) => {
  return getAllAdmins(res);
});

router.get("/manage/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return getAdminById(id, res);
});

router.get("/manage/email", (req, res) => {
  const email = req.query.email;
  return getAdminByEmail(email, res);
});
  

module.exports = router;