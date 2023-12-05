import React, { useState, useRef } from "react";

const Player = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='player' style={{ display: "inline" }}>
      <audio style={{ display: "none" }} ref={audioRef} src={audioUrl} />
      <img
        src={`/icons/${isPlaying ? "pause" : "play"}.svg`}
        alt={`${isPlaying ? "pasue" : "play"}`}
        onClick={togglePlay}
        style={{ marginBottom: -2 }}
      />
    </div>
  );
};

export default Player;
