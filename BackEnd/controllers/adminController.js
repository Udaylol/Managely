const admins = require("../admins.json");
const employees = require("../employees.json");

function getAllAdmins(res) {
  if (admins) {
    return res
      .status(200)
      .json({ message: "Fetched all admins", success: true, data: admins });
  } else {
    return res
      .status(401)
      .json({ message: "Failed to fetch admins", success: false });
  }
}

function getAdminById(id, res) {
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
}

function getAdminByEmail(email, res) {
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
}

module.exports = { getAdminById, getAdminByEmail, getAllAdmins };
