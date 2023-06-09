import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  
  //using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message))
  // }, []);

  //using async and await

  const getApiData = async() => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data)
    } catch (error) {
      setIsError(error.message)
    }
    
  }

  useEffect(() => {
    getApiData();
  }, []) 

  return (
    <div className="App">
      <h1>Axios</h1>
      {isError !== "" && <h1>{isError}</h1>}
      <div className="grid">
        
          {myData.slice(0,12).map((item) => {
            const { id, title, body } = item;
            return (
              <div className="card" key={id}>
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0,100)}</p>
              </div>
            );
          })}
      
      </div>
    </div>
  );
};

export default App;
