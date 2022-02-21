import { useRef, useState } from "react";
import world from "../assets/worldVideo.mp4";

const MediaPlayer = () => {
  // Estados
  const [onPlay, setOnPlay] = useState(false);
  const videoRef = useRef();

  const handlePlay = () => {
    const video = videoRef.current;

    setOnPlay(!onPlay);
    if (onPlay) {
      video.pause();
      return;
    }
    video.play();
  };

  return (
    <div>
      <h3>Media Player</h3>

      <video
        ref={videoRef}
        src={world}
        width={500}
        onClick={handlePlay}
      ></video>
      <br />
      <button onClick={handlePlay}>{onPlay ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;
