const express = require("express");
const router = express.Router();
const { glGroup } = require("../models");
const GlGroup = require("../class/GlGroup")

// Get all Groups
router.get("/all", async (req, res) => {
  const listOfGroups = await glGroup.findAll();
  res.json(listOfGroups);
});

// Get Groups by Group Lead class method
router.get("/lead", async (req, res) => {
    await new GlGroup( req, res ).getCategoriesByDepartmentLead(req.body.leadId);
});

// Get Groups by Group Lead class method
router.get("/dept", async (req, res) => {
    await new GlGroup( req, res ).getCategoriesByDepartment(req.body.department_id);
});

// // Get Groups by Group Lead
// router.get("/lead", async (req, res) => {
//     const leadId = req.body.leadId
//     const listOfGroups = await glGroup.findAll({ where: {ag_lead_id: leadId}})
//     res.json(listOfGroups);
// });

// Create new group
router.post("/new", async (req, res) => {
    const newGroup = req.body;
    await glGroup.create(newGroup);
    res.send({"message": "new Group created"});
});

// Update a Group
router.put("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateGroupWith = req.body
    const updateGroup = await glGroup.update(
        { ...updateGroupWith },
        {where: { id: id }});
    res.json(updateGroup);
});

// Delete Group
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteGroup = await glGroup.destroy({ where: {id: id}});
    res.json(deleteGroup);
});

module.exports = router;