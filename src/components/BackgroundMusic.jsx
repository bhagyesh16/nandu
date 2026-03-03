import { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Soft volume
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleMusic}
        className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-pink-500 transition-all shadow-lg border border-pink-300"
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
      {/* Add your MP3 file to src/assets/song.mp3 */}
      <audio ref={audioRef} loop>
        <source src="/src/assets/song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;
