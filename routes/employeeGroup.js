const express = require("express");
const EmployeeGroup = require("../class/EmployeeGroup");
const router = express.Router();
const { employeeGroup } = require("../models");

// Get all EmployeeGroups
router.get("/all", async (req, res) => {
    await new EmployeeGroup( req, res ).getAllEmployeeGroup(i);
});

// Get all EmployeeGroups by group_id
router.get("/groupMembers/:id", async (req, res) => {
    const { id } = req.params
    await new EmployeeGroup( req, res ).getGroupMembers(id);
});
  
// Get all EmployeeGroups by group_id
router.get("/groupId/:id", async (req, res) => {
    const { id } = req.params
    const listOfEmployeeGroups = await employeeGroup.findAll({where: {group_id: id}});
    res.json(listOfEmployeeGroups);
});

// Create new group
router.post("/new", async (req, res) => {
    const newGroup = req.body;
    await employeeGroup.create(newGroup);
    res.send({"message": "new Group created"});
});

// Update a Group
router.patch("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateGroupWith = req.body
    const updateGroup = await employeeGroup.update(
        { ...updateGroupWith },
        {where: { id: id }});
    res.json(updateGroup);
});

// Delete Group
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteGroup = await employeeGroup.destroy({ where: {id: id}});
    res.json(deleteGroup);
});

module.exports = router;