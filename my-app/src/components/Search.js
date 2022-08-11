import React, { useState } from "react";

function Search() {



  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
