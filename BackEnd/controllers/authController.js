const admins = require("../admins.json");
const employees = require("../employees.json");

function loginAsAdmin(email, password, res) {
  const foundAdmin = admins.find(
    (admin) => admin.email === email && admin.password === password
  );
  if (foundAdmin) {
    return res
      .status(200)
      .json({ message: "Admin Login successful", success: true });
  } else {
    return res
      .status(401)
      .json({ message: "Admin Login failed", success: false });
  }
}

function loginAsEmployee(email, password, res) {
  const foundEmployee = employees.find(
    (employee) => employee.email === email && employee.password === password
  );
  if (foundEmployee) {
    return res
      .status(200)
      .json({ message: "Employee Login successful", success: true });
  } else {
    return res
      .status(401)
      .json({ message: "Employee Login failed", success: false });
  }
}
module.exports = { loginAsAdmin, loginAsEmployee };
