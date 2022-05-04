const express = require("express");
const router = express.Router();
const { glDepartment } = require("../models");

// Get all Department
router.get("/all", async (req, res) => {
  const listOfDepartment = await glDepartment.findAll();
  res.json(listOfDepartment);
});

// Create new Department
router.post("/new", async (req, res) => {
    const newDepartment = req.body;
    await glDepartment.create(newDepartment);
    res.send({"message": "new department created"});
});

// Update a Department
router.get("/update/:id", async (req, res) => {
  const {id} = req.params
  const updateDepartmentWith = req.body
  const updateDepartment = await glDepartment.update(
      { ...updateDepartmentWith },
      {where: { id: id }});
  res.json(updateDepartment);
});

// Delete Department
router.get("/delete/:id", async (req, res) => {
  const {id} = req.params
  const deleteDepartment = await glDepartment.destroy({ where: {id: id}});
  res.json(deleteDepartment);
});

module.exports = router;