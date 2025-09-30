const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to managely :)");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});