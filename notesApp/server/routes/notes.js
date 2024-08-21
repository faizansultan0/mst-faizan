const express = require('express');
const { requireSignIn } = require('../middlewares/requireSignIn');
const router = express.Router();
const {
    addNote,
    getAllNotes,
    getNote,
    deleteNote,
    editNote,
    getTotalNotes,
    searchNotes,
} = require("../controllers/notes");

router.post('/add', requireSignIn, addNote);
router.get('/all', requireSignIn, getAllNotes);
router.get('/total', requireSignIn, getTotalNotes)
router.get('/:id', requireSignIn, getNote);
router.delete('/delete/:id', requireSignIn, deleteNote);
router.put('/edit', requireSignIn, editNote)
router.get('/search/:query/:page', requireSignIn, searchNotes);

module.exports = router;