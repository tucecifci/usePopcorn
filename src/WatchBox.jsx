import React from "react";
import { useState } from "react";
import WatchedList from "./WatchedList";
import WatchSummary from "./WatchSummary";

function WatchBox({ tempWatchedData, average }) {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchSummary watched={watched} average={average} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchBox;
