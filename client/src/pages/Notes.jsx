import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Notes.module.css";

const fetchNotes = async (setNotes, navigate) => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }
  try {
    const res = await fetch("/api/notes", {
      headers: { "x-auth-token": token },
    });
    if (res.ok) {
      const data = await res.json();
      setNotes(data);
    } else {
      alert("Failed to fetch notes");
    }
  } catch (err) {
    console.error(err);
  }
};

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes(setNotes, navigate);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/notes/${editingId}` : "/api/notes";
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ title, content }),
      });
      if (res.ok) {
        fetchNotes(setNotes, navigate);
        setTitle("");
        setContent("");
        setEditingId(null);
      } else {
        alert("Failed to save note");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note._id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        headers: { "x-auth-token": token },
      });
      if (res.ok) {
        fetchNotes(setNotes, navigate);
        alert("Failed to delete note");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={style.wrapper}>
      <button onClick={handleLogout} className={style.logoutBtn}>
        Logout
      </button>
      <form onSubmit={handleSubmit} className={style.formSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className={style.formActions}>
          <button type="submit" className={style.submitBtn}>
            {editingId ? "Update" : "Add"} Note
          </button>
          {editingId && (
            <button
              type="button"
              className={style.cancelBtn}
              onClick={() => setEditingId(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      <ul className={style.noteList}>
        {notes.map((note) => (
          <li key={note._id} className={style.noteItem}>
            <h3 className={style.noteTitle}>{note.title}</h3>
            <p className={style.noteContent}>{note.content}</p>
            <div className={style.noteActions}>
              <button
                className={style.editBtn}
                onClick={() => handleEdit(note)}
              >
                Edit
              </button>
              <button
                className={style.deleteBtn}
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
