import React, { useState, useEffect } from "react";
import "./App.css";

import Actor from "./Actor";
function App() {
  const [query, setQuery] = useState("");

  const [search, setSearch] = useState("");
  const [serie, setSerie] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    const data = await response.json();
    if (data && data.length > 0) {
      setSerie(data);
    }
    else{
      alert("not found");
    }
  };

  useEffect(() => {
    getData();
    console.log(serie);
  
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
  
  <div className="header">
  <h1>Breaking bad and Better call saul API 🎥</h1 >
  
  <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="search for a name"
          onChange={inputSearch}
        ></input>
        <button className="search-button" type="submit">
          <strong> search</strong>
        </button>
      </form>
</div>
 

   
  
    
<div className="flexContainer">
      {serie.map((item) => (
        <Actor 
       
          name={item.name}
          birth={item.birthday}
          nickname={item.nickname}
          appearance={item.appearance}
          portrayed={item.portrayed}
          image={item.img}
          occupation={item.occupation}
        status={item.status}
          key={item.id}
        />
      ))}
      </div>
      <hr></hr>
      <footer class="footer">
    <div class="footerContainer">
        <h5 class="copyright" >© LOUKILIZAKARIA 2020</h5>
    </div>
</footer>
    </div>
  );
}

export default App;
