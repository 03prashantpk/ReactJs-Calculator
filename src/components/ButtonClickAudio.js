import { useState, useEffect } from "react";

const PlayAudio = ({ isPlay }) => {
  const [audioPlayer, setAudioPlayer] = useState(null);

  useEffect(() => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_f746cb8177.mp3?filename=cork-85200.mp3");
    setAudioPlayer(audio);

    const handleAudioEnded = () => {
      audio.pause();
      audio.currentTime = 0;
      setAudioPlayer(null);
    };

    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.pause();
      audio.currentTime = 0;
      setAudioPlayer(null);
    };
  }, []);

  useEffect(() => {
    if (audioPlayer) {
      isPlay ? audioPlayer.play() : audioPlayer.pause();
    }
  }, [isPlay, audioPlayer]);

  return null;
};

export default PlayAudio;
