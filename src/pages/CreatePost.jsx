import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch('https://dummyjson.com/posts/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body  , userId:'1' }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTitle("");
        setBody("");
        navigate("/posts");
      })

      if (response.status >= 200 && response.status < 300) {
        console.log('ok');
      }
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="body">body:</label>
          <textarea id="body" value={body} onChange={handleBodyChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
