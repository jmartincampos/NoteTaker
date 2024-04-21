const express = require('express');
const router = express.Router();
const fs = require('fs');

// Route to get all notes
router.get('/', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read notes data' });
      return;
    }
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

// Route to add a new note
router.post('/', (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    res.status(400).json({ error: 'Title and text are required' });
    return;
  }

  // Generate unique ID for the new note
  const id = Date.now().toString();
  const newNote = { id, title, text };

  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read notes data' });
      return;
    }
    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile('./db.json', JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save note' });
        return;
      }
      res.json(newNote);
    });
  });
});

module.exports = router;
