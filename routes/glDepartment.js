const express = require("express");
const router = express.Router();
const { glDepartment } = require("../models");
const GlDepartment = require("../class/GlDepartment")

// Get all Department
router.get("/all", async (req, res) => {
  await new GlDepartment( req, res ).getAllDepartments();

});

// Get department members class method
router.get("/members/:id", async (req, res) => {
  const {id} = req.params
  // await new GlDepartment( req, res ).getDepartmentEmplyeeId(id);
  await new GlDepartment( req, res ).getDepartmentMembers(id);
});

// Create new Department
router.post("/new", async (req, res) => {
    const newDepartment = req.body;
    await glDepartment.create(newDepartment);
    res.send({"message": "new department created"});
});

// Update a Department
router.put("/update/:id", async (req, res) => {
  const {id} = req.params
  const updateDepartmentWith = req.body
  const updateDepartment = await glDepartment.update(
      { ...updateDepartmentWith },
      {where: { id: id }});
  res.json(updateDepartment);
});

// Delete Department
router.delete("/delete/:id", async (req, res) => {
  const {id} = req.params
  const deleteDepartment = await glDepartment.destroy({ where: {id: id}});
  res.json(deleteDepartment);
});

module.exports = router;