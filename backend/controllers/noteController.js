const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
    const notes = await Note.find();

    res.json(notes);
};

exports.createNote = async (req, res) => {
    const { title, content } = req.body;

    const note = await Note.create({
        title,
        content
    });

    res.status(201).json(note);
};

exports.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.json({
        message: "Note deleted"
    });
};