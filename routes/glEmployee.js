const express = require("express");
const GlEmployee = require("../class/GlEmployee");
const router = express.Router();
const { glEmployee } = require("../models");

// Get all Employees
router.get("/all", async (req, res) => {
  const listOfEmployees = await glEmployee.findAll();
  res.json(listOfEmployees);
});

// Get all Employees with Names
router.get("/withName", async (req, res) => {
    await new GlEmployee( req, res ).getEmployeeName();
  });

module.exports = router;