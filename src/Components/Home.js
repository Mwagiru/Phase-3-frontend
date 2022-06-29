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

    </>
  )
}

export default Home