import { useState, useRef, useEffect } from "react";

const ScrollAnimation = () => {
  // Estados
  const [background, setBackground] = useState("");

  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      setBackground(y < 600 && "orange");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListenerEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h3>Scroll Animation</h3>
      <div
        ref={divRef}
        style={{ height: "30vh", width: "500px", background: background }}
      ></div>
    </div>
  );
};

export default ScrollAnimation;
