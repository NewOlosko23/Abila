const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff");

router.post("/", staffController.addStaff); // Add a new staff member
router.delete("/:id", staffController.releaseStaff); // Release a staff member
router.get("/", staffController.getAllStaff); // View all staff members

module.exports = router;
