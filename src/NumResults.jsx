import React from "react";

function NumResults({movies}) {
  return (
    <div>
      <p className="num-results">
        Found <strong>{movies.length} </strong> results
      </p>
    </div>
  );
}

export default NumResults;
