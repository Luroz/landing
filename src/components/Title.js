
import React from "react";

const Title = ({ title }) => {
  return (
    <p style={{ textAlign: "left", fontWeight: "bold" }}>
      {title.toUpperCase()}
    </p>
  );
};

export default Title;