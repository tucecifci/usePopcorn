import React, { useState } from "react";
import Star from "./Star";

function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(1);
  const handleRating = (rating) => {
    setRating(rating);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };
  const starContainerStyle = {
    display: "flex",
  };
  const textStyle = {
    lineHeight: "1",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{rating || ""} </p>
    </div>
  );
}

export default StarRating;

