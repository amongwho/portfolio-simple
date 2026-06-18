const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Note = require("../models/Notes");

// @route   GET api/notes
// @desc    Get all notes for logged-in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/notes
// @desc    Create a note
// @access  Private
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = new Note({ title, content, user: req.user.id });
    await note.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/notes/:id
// @desc    Update a note
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    // Check ownership
    if (note.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    note.title = title || note.title;
    note.content = content || note.content;
    await note.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/notes/:id
// @desc    Delete a note
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    if (note.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    await note.remove();
    res.json({ msg: "Note removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
