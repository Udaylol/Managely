const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return getEmployeeData(req, res);
});

router.put("/", (req, res) => {
    return updateEmployeeData(req, res);
});

router.post("/requests", (req, res) => {
    return createRequest(req, res);
});

router.get("/requests", (req, res) => {
    return getAllRequests(req, res);
});

router.put("/requests/id/:id", (req, res) => {
    return updateRequest(req, res);
});

router.delete("/requests/id/:id", (req, res) => {
    return deleteRequest(req, res);
});
module.exports = router;
