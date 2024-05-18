const Note = require("../models/note");

const addNote = async (req, res) => {
    // console.log('ADD NOTE REQUEST BY: ', req.auth)
    console.log("ADD note data: ", req.body);
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
    let page = req.query.page;
    if (!req.auth._id) {
        return res.json({
            error: "Unauthorized Access",
        });
    }
    try {
        const notes = await Note.find({ createdBy: req.auth._id })
            .skip((page - 1) * 8)
            .limit(8)
            .sort({
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

const getTotalNotes = async (req, res) => {
    if (!req.auth._id) {
        return res.json({
            error: "Unauthorized Access",
        });
    }
    try {
        const totalNotes = await Note.countDocuments({
            createdBy: req.auth._id,
        });

        return res.json({ totalNotes });
    } catch (err) {
        console.log("An error occured while total notes: ", err);
        return res.json({
            error: "An error occured while getting total notes",
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

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.json({
                error: "Invalid try",
            });
        }

        return res.json({
            message: "Note deleted Successfully",
        });
    } catch (err) {
        console.log("An error occured while deleting note");
        return res.json({
            error: "Error occured while deleting note",
        });
    }
};

const editNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.body._id, {
            title: req.body.title,
            description: req.body.description,
        });

        if (!note) {
            return res.json({
                error: "Could not find note",
            });
        }

        return res.json({
            note: note,
            message: "Note updated successully",
        });
    } catch (err) {
        console.log("Edit note ERR: ", err);
        res.json({
            error: "Could not edit note",
        });
    }
};

const searchNotes = async (req, res) => {
    // console.log('Search Query: ', req.params.query);
    const { query, page } = req.params;

    try {
        const notes = await Note.find({
            title: { $regex: query, $options: "i" },
        })
            .skip((page - 1) * 8)
            .limit(8)
            .sort({createdAt: -1});

        const totalNotes = await Note.countDocuments({
            title: {$regex: query, $options: "i"},
        });
        res.json({
            notes,
            total: totalNotes,
        });
    } catch (err) {
        res.json({
            error: "Could not search notes",
        });
        console.log("Search Notes ERR: ", err);
    }
};

module.exports = {
    addNote,
    getAllNotes,
    getNote,
    deleteNote,
    editNote,
    getTotalNotes,
    searchNotes,
};
