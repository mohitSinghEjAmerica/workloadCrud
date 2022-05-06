const express = require("express");
const router = express.Router();
const { wlStatus } = require("../models");

// Get all Status
router.get("/all", async (req, res) => {
  const listOfStatus = await wlStatus.findAll();
  res.json(listOfStatus);
});

// Create new Status
router.post("/new", async (req, res) => {
    const newStatus = req.body;
    await wlStatus.create(newStatus);
    res.send({"message": "new Status created"});
});

// Update a Status
router.patch("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateStatusWith = req.body
    const updateStatus = await wlStatus.update(
        { ...updateStatusWith },
        {where: { id: id }});
    res.json(updateStatus);
});

// Delete Status
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteStatus = await wlStatus.destroy({ where: {id: id}});
    res.json(deleteStatus);
});

module.exports = router;