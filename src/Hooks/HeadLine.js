import React, { useState } from "react";

export default function useHeadLine(_text) {
  const [headLine, setHeadLine] = useState({
    text: _text,
  });
  return (
    <h3
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {headLine.text}
    </h3>
  );
}
