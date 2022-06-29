import './App.css';
import React,{ useState } from 'react';

const App = () => {
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
     KU
    </>
  );
}

export default App;
