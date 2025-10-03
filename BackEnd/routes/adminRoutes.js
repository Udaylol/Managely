const express = require("express");
const router = express.Router();
const {
  getAllAdmins,
  getAdminById,
  getAdminByEmail,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const {
  getAllEmployees,
  getEmployeeById,
  getEmployeeByEmail,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/adminController");

// routes for admin management
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

router.post("/manage", (req, res) => {
  const { name, email, password } = req.body;
  return createAdmin(name, email, password, res);
});

router.put("/manage/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, password } = req.body;
  return updateAdmin(id, name, email, password, res);
});

router.delete("/manage/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return deleteAdmin(id, res);
});

// routes for employee management
router.get("/manage/employee", (req, res) => {
  return getAllEmployees(res);
});

router.get("/manage/employee/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return getEmployeeById(id, res);
});

router.get("/manage/employee/email", (req, res) => {
  const email = req.query.email;
  return getEmployeeByEmail(email, res);
});

router.post("/manage/employee", (req, res) => {
  const { name, email, password } = req.body;
  return createEmployee(name, email, password, res);
});

router.put("/manage/employee/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, password } = req.body;
  return updateEmployee(id, name, email, password, res);
});

router.delete("/manage/employee/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return deleteEmployee(id, res);
});

module.exports = router;