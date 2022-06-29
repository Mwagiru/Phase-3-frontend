import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
      const [author_id, setAuthor_id] = useState("");
      const [quotes, setQuotes] = useState([]);
      const [content, setContent] = useState("");
      const [data, setData] = useState({
        author: "",
        quote: "",
      });
      function submit(e) {
        e.preventDefault();
        axios
          .post("http://localhost:9292/quotes", {
            author: author_id,
            quote: content,
          })
          .then((res) => {
            setQuotes([...quotes, res.data]);
          });
      }

      function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
      }

  return (
    <>
      <div className="home">
        <h1>Add Your Quote</h1>
        <form onSubmit={(e) => submit(e)}>
          <label>Author:</label>
          <input
            id="input"
            type="text"
            value={author_id}
            onChange={(e) => setAuthor_id(e.target.value)}
          />
          <label>Quote:</label>
          <textarea
            id="txt-area"
            rows="5"
            cols="80"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button>Update</button>
        </form>
      </div>
      <div className="show">
       <p>Hello!!</p>
      </div>
    </>
  );
}

export default Home;