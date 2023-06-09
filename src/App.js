import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const[myData, setMyData] = useState([])
  const[isError, setIsError] = useState("")
  
  
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => setMyData(res.data))
  //   .catch((error) => setIsError(error.message))
  //  }, [])


  const getApiData = async() => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data)
    } catch (error) {
      setIsError(error.message)
    }
  }

  useEffect(() => {
      getApiData();
  }, [])
  

   

   return(
    <div className="App">
      <h1>Hello Axios</h1>
      {isError !== "" && <h1>{isError}</h1>}
    <center className="grid">
      {myData.slice(0,12).map((item) => {
        const { id, title, body } = item; 
        return <div className="card" key={id}>
          <h2>{title.slice(0,15)}</h2>
          <p>{body.slice(0,100)}</p>
        </div>
      })}
    </center>
     </div>
  );
}
export default App;