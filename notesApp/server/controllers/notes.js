const Note = require('../models/note');

const addNote = async (req, res) => {
    // console.log('ADD NOTE REQUEST BY: ', req.auth)
    // console.log('ADD note data: ', req.body);
    const { title, description } = req.body;
    if (!title) {
        return res.json({
            error: "Title is Required",
        })
    }

    try {
        const note = new Note({
            title,
            description,
            createdBy: req.auth._id,
        }).save();

        if (!note) {
            return res.json({
                error: "An error Occured",
            });
        }

        return res.json({
            message: "Note added Successfully",
        })

    } catch (err) {
        console.log('Error while adding note: ', err);
        return res.json({
            error: "An Error Occured"
        })
    }
}

const getAllNotes = async (req, res) => {
    if (!req.auth._id) {
        return res.json({
            error: "Unauthorized Access",
        })
    }
    try {
        const notes = await Note.find({ createdBy: req.auth._id });
        
        return res.json({notes});
    } catch (err) {
        console.log('An error occured while getting notes: ', err);
        return res.json({
            error: "An error occured while getting all notes",
        })
    }
}

module.exports = { addNote, getAllNotes };