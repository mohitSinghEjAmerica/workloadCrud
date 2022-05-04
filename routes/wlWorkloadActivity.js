const express = require("express");
const router = express.Router();
const { wlWorkloadActivity } = require("../models");

// Get all WorkloadActivity
router.get("/all", async (req, res) => {
  const listOfWorkloadActivity = await wlWorkloadActivity.findAll();
  res.json(listOfWorkloadActivity);
});

// Create new WorkloadActivity
router.post("/new", async (req, res) => {
    const newWorkloadActivity = req.body;
    await wlWorkloadActivity.create(newWorkloadActivity);
    res.send({"message": "new WorkloadActivity created"});
});

// Update a WorkloadActivity
router.get("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateWorkloadActivityWith = req.body
    const updateWorkloadActivity = await wlWorkloadActivity.update(
        { ...updateWorkloadActivityWith },
        {where: { id: id }});
    res.json(updateWorkloadActivity);
});

// Delete WorkloadActivity
router.get("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteWorkloadActivity = await wlWorkloadActivity.destroy({ where: {id: id}});
    res.json(deleteWorkloadActivity);
});

module.exports = router;