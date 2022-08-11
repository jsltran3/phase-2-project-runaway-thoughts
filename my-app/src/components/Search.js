import React, { useState } from "react";

function Search({ term, setTerm}) {

  function handleSearchSubmit(event) {
    console.log("Searching...");
    setTerm(event.target.value);
  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchSubmit}
        value={term}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
