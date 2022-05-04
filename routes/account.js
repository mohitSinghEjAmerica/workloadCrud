const express = require("express");
const router = express.Router();
const { account } = require("../models");

// Get all Accounts
router.get("/all", async (req, res) => {
  const listOfAccounts = await account.findAll();
  res.json(listOfAccounts);
});

// Create new Account
router.post("/new", async (req, res) => {
    const newAccount = req.body;
    await account.create(newAccount);
    res.send({"message": "new Account created"});
});

// Update a Account
router.put("/update/:id", async (req, res) => {
    const {id} = req.params
    const updateAccountWith = req.body
    const updateAccount = await account.update(
        { ...updateAccountWith },
        {where: { id: id }});
    res.json(updateAccount);
});

// Delete Account
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params
    const deleteAccount = await account.destroy({ where: {id: id}});
    res.json(deleteAccount);
});

module.exports = router;