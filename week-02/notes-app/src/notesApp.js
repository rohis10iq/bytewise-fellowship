import React, { useState } from 'react';
import './notesApp.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    if (note.trim() !== '') {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="notes-container">
      <h1>Notes App</h1>
      <input
        type="text"
        value={note}
        onChange={handleNoteChange}
        placeholder="Write a note..."
        className="note-input"
      />
      <button onClick={addNote} className="add-note-button">Add Note</button>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            {note}
            <button onClick={() => deleteNote(index)} className="delete-note-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
