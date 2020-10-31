import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function useHeadLine(_text) {
  const [headLine, setHeadLine] = useState({
    text: _text,
  });
  return (
    <div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {headLine.text}
      </h3>
    </div>
  );
}
