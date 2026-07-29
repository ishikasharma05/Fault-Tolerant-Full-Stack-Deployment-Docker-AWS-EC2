import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const loadNotes = async () => {
    try {
      const response = await fetch(`${API}/api/notes`);
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const addNote = async () => {
    if (!title || !content) return;

    await fetch(`${API}/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle("");
    setContent("");

    loadNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`${API}/api/notes/${id}`, {
      method: "DELETE",
    });

    loadNotes();
  };

  return (
    <div
      style={{
        width: "700px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Docker DevOps Notes</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <button onClick={addNote}>Add Note</button>

      <hr />

      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h3>{note.title}</h3>

          <p>{note.content}</p>

          <button onClick={() => deleteNote(note._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;