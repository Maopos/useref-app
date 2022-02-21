import React, { useState } from "react";
import Card from "./Card";

const LoadingApp = () => {
  // Estados
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>Loading App</h3>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show ? <Card /> : null}
    </div>
  );
};

export default LoadingApp;
