import React, { useState } from "react";
import "./SearchBar.css";
import TextField from "@material-ui/core/TextField";


const SearchBar = ({ setInput, input }) => {


  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <TextField
          required
          id="outlined-required"
          label="Github Username"
          variant="outlined"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <br />

    </div>
  );
};

export default SearchBar;
