import Note from '../models/Notes.models.js';

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = new Note({ title, content, user: req.user.id });
        await note.save();
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const updateNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        let note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ msg: 'Note not found' });

        if (note.user.toString() !== req.user.id)
            return res.status(401).json({ msg: 'Not authorized' });

        note.title = title || note.title;
        note.content = content || note.content;
        await note.save();
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ msg: 'Note not found' });

        if (note.user.toString() !== req.user.id)
            return res.status(401).json({ msg: 'Not authorized' });

        await note.deleteOne();
        res.json({ msg: 'Note removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
