const express = require("express");
const router = express.Router();
const { wlStatusCategory } = require("../models");

// Get all StatusCategory
router.get("/all", async (req, res) => {
  const listOfStatusCategory = await wlStatusCategory.findAll();
  res.json(listOfStatusCategory);
});

// Create new StatusCategory
router.post("/new", async (req, res) => {
    const newStatusCategory = req.body;
    await wlStatusCategory.create(newStatusCategory);
    res.send({"message": "new StatusCategory created"});
});

// Update a StatusCategory
router.get("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateStatusCategoryWith = req.body
    const updateStatusCategory = await wlStatusCategory.update(
        { ...updateStatusCategoryWith },
        {where: { id: id }});
    res.json(updateStatusCategory);
});

// Delete StatusCategory
router.get("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteStatusCategory = await wlStatusCategory.destroy({ where: {id: id}});
    res.json(deleteStatusCategory);
});

module.exports = router;