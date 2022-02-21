import React, { useState, useEffect, useRef } from "react";

const RenderApp = () => {
  // Estados
  const [text, setText] = useState("");

  const renderRef = useRef(0);

  useEffect(() => {
    renderRef.current++;
  });

  return (
    <div>
      <h3>Render App</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Renders: {renderRef.current + 1}</p>
    </div>
  );
};

export default RenderApp;
