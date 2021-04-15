import React, { useState } from 'react';
import Display from "../Display/Display";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";


function App() {

  const[input, setInput] = useState('Hello')

  // const handleupdate = (event) => {
  //   setInput(e.target.value)
  // }

  return (
    <div className="App">
    
        <Header />

        <SearchBar setInput={setInput} input={input} />

        <Display />
      
    </div>
  );
}

export default App;
