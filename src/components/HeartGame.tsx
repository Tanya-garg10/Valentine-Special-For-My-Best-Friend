import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

interface HeartGameProps {
  onYes: () => void;
}

const HeartGame = ({ onYes }: HeartGameProps) => {
  const [caught, setCaught] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const catchHeart = useCallback(() => {
    setCaught(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#e84393", "#fd79a8", "#fab1a0", "#ff6b6b"],
    });
  }, []);

  const moveNoButton = () => {
    setNoPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <section className="py-24 px-6 gradient-soft min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto">
        {!caught ? (
          <>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient"
            >
              Catch My Heart! 💕
            </motion.h2>
            <p className="font-body text-muted-foreground mb-12">
              Click the floating heart to catch it!
            </p>
            <div className="relative h-64 w-full">
              <motion.button
                onClick={catchHeart}
                className="absolute text-primary cursor-pointer"
                animate={{
                  x: [0, 80, -60, 100, -80, 0],
                  y: [0, -60, 40, -80, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.3 }}
                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
              >
                <Heart size={56} fill="currentColor" className="animate-bounce-heart" />
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <Heart size={80} className="mx-auto text-primary mb-6" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              You caught my heart ❤️
            </h2>
            <p className="text-xl font-body text-muted-foreground mb-10">
              Now will you be my forever Valentine?
            </p>

            <div className="flex items-center justify-center gap-6 relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onYes}
                className="px-10 py-4 gradient-romantic text-primary-foreground font-body font-bold text-xl rounded-full shadow-romantic"
              >
                YES 💖
              </motion.button>

              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="px-8 py-4 bg-secondary text-secondary-foreground font-body font-semibold rounded-full"
              >
                Ask Me Again 🙈
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeartGame;
