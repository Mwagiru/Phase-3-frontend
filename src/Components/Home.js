import React, { useState, useEffect} from 'react';
import axios from "axios";
const Home = () => {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  
  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try{
      const data = await axios.get("http://localhost:9292/quotes");
      arrayOfQuotes = data.data;
    
    
    }catch(error){
      console.log(error)
    }
    try {
     setQuotes(arrayOfQuotes.content);
     setAuthor(arrayOfQuotes.author);
    }catch (error){
      console.log(error)
    }
  };
   useEffect(() => {
     quoteAPI();
   }, []);

  return (
    <>
      <div className="App">
        <div className="quotebox">
          <div className="container">
            <div className="quote">
              <h2>{quotes}</h2>
            </div>
            <div className="author">~{author}</div>
            <div className="quotebutton">
              <button onClick={quoteAPI}>GIMME QOUTE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home