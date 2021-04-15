import React, { useState } from 'react';
import Display from "../Display/Display";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";


function App() {

  const[input, setInput] = useState('')

  return (
    <div className="App">
    
        <Header />

        <SearchBar setInput={setInput} input={input} />

        <Display input={input}/>
      
    </div>
  );
}

export default App;
