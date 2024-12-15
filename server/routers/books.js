const express = require('express');
const router = express.Router();
const bookdb = require('../models/BookSchema');

// Get all menus
router.get('/book-section', async (req, res) => {
  try {
    const menus = await bookdb.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new menu
router.post('/book-section', async (req, res) => {
  const menu = new bookdb({
    Title: req.body.Title,
    Author: req.body.Author,
    Genre: req.body.Genre,
    Stock: req.body.Stock,
  });

  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a menu
router.patch('/book-section/:id', async (req, res) => {
  try {
    const menu = await bookdb.findById(req.params.id);
    if (req.body.Title != null) {
      menu.Title = req.body.Title;
    }
    if (req.body.Author != null) {
      menu.Author = req.body.Author;
    }
    if (req.body.Genre != null) {
      menu.Genre = req.body.Genre;
    }
    if (req.body.Stock != null) {
      menu.Stock = req.body.Stock;
    }
    

    const updatedMenu = await menu.save();
    res.json(updatedMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
