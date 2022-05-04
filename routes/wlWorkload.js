const express = require("express");
const router = express.Router();
const { wlWorkload } = require("../models");

// Get all Workload
router.get("/all", async (req, res) => {
  const listOfWorkload = await wlWorkload.findAll();
  res.json(listOfWorkload);
});

// Create new Workload
router.post("/new", async (req, res) => {
    const newWorkload = req.body;
    await wlWorkload.create(newWorkload);
    res.send({"message": "new Workload created"});
});

// Update a Workload
router.get("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateWorkloadWith = req.body
    const updateWorkload = await wlWorkload.update(
        { ...updateWorkloadWith },
        {where: { id: id }});
    res.json(updateWorkload);
});

// Delete Workload
router.get("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteWorkload = await wlWorkload.destroy({ where: {id: id}});
    res.json(deleteWorkload);
});

module.exports = router;