import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using YouTube Audio Library - No Copyright Music
    // This is a working romantic piano melody
    const musicUrl = "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log("Music playback issue:", err);
          // Try again after a short delay
          setTimeout(() => {
            audioRef.current?.play().then(() => setPlaying(true)).catch(() => { });
          }, 500);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      <button
        onClick={toggle}
        className="p-3 rounded-full glass shadow-soft transition-all duration-300 hover:scale-110 text-primary hover:shadow-romantic group relative"
        aria-label={playing ? "Pause music" : "Play music"}
        title={playing ? "🎵 Pause" : "💕 Play romantic music"}
      >
        {playing ? (
          <>
            <Volume2 size={24} className="animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
          </>
        ) : (
          <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
        )}
      </button>

      {playing && (
        <div className="glass px-3 py-2 rounded-full text-xs text-primary font-medium flex items-center gap-2 animate-pulse">
          <Music size={14} />
          <span>Playing...</span>
        </div>
      )}
    </div>
  );
};

export default MusicToggle;
