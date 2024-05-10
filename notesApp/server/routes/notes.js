const express = require('express');
const { requireSignIn } = require('../middlewares/requireSignIn');
const router = express.Router();
const { addNote, getAllNotes, getNote, deleteNote } = require("../controllers/notes");

router.post('/add', requireSignIn, addNote);
router.get('/all', requireSignIn, getAllNotes);
router.get('/:id', requireSignIn, getNote);
router.delete('/delete/:id', requireSignIn, deleteNote)

module.exports = router;