const Note = require("../models/note");

const addNote = async (req, res) => {
    // console.log('ADD NOTE REQUEST BY: ', req.auth)
    console.log('ADD note data: ', req.body);
    const { title, description } = req.body.note;
    if (title === "") {
        return res.json({
            error: "Title is Required",
        });
    }

    try {
        const note = new Note({
            title: title,
            description: description,
            createdBy: req.auth._id,
        });

        const retNote = await Note(note).save();

        if (!retNote) {
            return res.json({
                error: "An error Occured",
            });
        }

        return res.json({
            message: "Note added Successfully",
        });
    } catch (err) {
        console.log("Error while adding note: ", err);
        return res.json({
            error: "An Error Occured",
        });
    }
};

const getAllNotes = async (req, res) => {
    if (!req.auth._id) {
        return res.json({
            error: "Unauthorized Access",
        });
    }
    try {
        const notes = await Note.find({ createdBy: req.auth._id }).sort({
            createdAt: -1,
        });

        return res.json({ notes });
    } catch (err) {
        console.log("An error occured while getting notes: ", err);
        return res.json({
            error: "An error occured while getting all notes",
        });
    }
};

const getNote = async (req, res) => {
    console.log("Req params: ", req.params);
    if (!req.auth._id) {
        return res.json({
            error: "Unauthorized Access",
        });
    }
    try {
        const note = await Note.findOne({ _id: String(req.params.id) });
        if (!note) {
            return res.json({ error: "Note not found" });
        }
        return res.json({ note: note });
    } catch (err) {
        console.log("An error occured while getting note: ", err);
        return res.json({
            error: "An error occured while getting note",
        });
    }
};

module.exports = { addNote, getAllNotes, getNote };
