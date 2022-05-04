const express = require("express");
const router = express.Router();
const { wlCategory } = require("../models");

// Get all Categories
router.get("/all", async (req, res) => {
  const listOfCategories = await wlCategory.findAll();
  res.json(listOfCategories);
});

// Create new Category
router.post("/new", async (req, res) => {
    const newCategory = req.body;
    await wlCategory.create(newCategory);
    res.send({"message": "new Category created"});
});

// Update a Category
router.put("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateCategoryWith = req.body
    const updateCategory = await wlCategory.update(
        { ...updateCategoryWith },
        {where: { id: id }});
    res.json(updateCategory);
});

// Delete Category
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteCategory = await wlCategory.destroy({ where: {id: id}});
    res.json(deleteCategory);
});

module.exports = router;