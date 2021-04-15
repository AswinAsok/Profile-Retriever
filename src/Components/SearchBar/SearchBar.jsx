import React from "react";
import "./SearchBar.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchBar = () => {
  return (
    <div className="searchbar-container">

      <div className = "searchbar">
        <TextField
          required
          id="outlined-required"
          label="Github Username"
          variant="outlined"
        />
      </div>
      <br/>
      <div className = "searchbtn">
      <Button
        size="large"
        className="btn-search"
        variant="outlined"
        color="primary"
      >
        Search
      </Button>
      </div>

    </div>
  );
};

export default SearchBar;
