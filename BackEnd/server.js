require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Welcome to managely :)");
});

app.post("/auth/admin", (req, res) => {
  
  const { email, password } = req.body;

  if (email === "uday@gmail.com" && password === "uday123") {
    res.status(200).json({ message: "Login successful", success: true });
  } else {
    res.status(401).json({ message: "Invalid credentials", success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});