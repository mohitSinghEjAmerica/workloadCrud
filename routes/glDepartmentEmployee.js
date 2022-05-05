const express = require("express");
const router = express.Router();
const { glDepartmentEmployee } = require("../models");

// Get all Employees
router.get("/all", async (req, res) => {
  const listOfEmployees = await glDepartmentEmployee.findAll();
  res.json(listOfEmployees);
});

router.post("/new", async (req, res) => {
    const empObj = {
        department_id: req.body.group_id,
        employee_id: req.body.id
    }
    await glDepartmentEmployee.create(empObj)
    res.send({message: "Employee added"})
})

router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params 
    await glDepartmentEmployee.destroy({ where: {employee_id: id}})
    res.send({message: "Employee deleted"})
})

module.exports = router;