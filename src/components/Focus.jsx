import { useState, useRef } from "react";

const Focus = () => {
  // Estado
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleFocus = () => {
    const input = inputRef.current;
    input.focus();
  };

  return (
    <div>
      <h3>Focus</h3>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Focus;
