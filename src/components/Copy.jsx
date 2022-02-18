import { useState, useRef } from "react";

const Copy = () => {
  // Estados
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <h3>Copy</h3>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      {copied ? <p>Is copied!</p> : null}
    </div>
  );
};

export default Copy;
