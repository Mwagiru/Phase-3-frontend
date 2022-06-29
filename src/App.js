import './App.css';
import React,{ useState } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  
   const API = async () => {
    let quotesarr = [];
    try{
      const data = await axios.get();
      quotesarr = data.data;
    
    
    }catch(error){
      console.log(error)
    }
    try {
     setQuotes(quotesarr.content);
     setAuthor(quotesarr.author);
    }catch (error){
      console.log(error)
    }
  };
    useEffect(() => {
      API();
    }, []);
  return (
    <>
      <div className="App">
        <div className="quotebox">
          <div className="container">
            <div className="quote">
              <h2>{quotes}</h2>
            </div>
            <div className="quotebutton">
              <button onClick={quoteAPI}>GIMME QOUTE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
