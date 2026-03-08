import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const CelebrationPage = () => {
  useEffect(() => {
    // Confetti burst
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#e84393", "#fd79a8", "#fab1a0", "#ffd700"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#e84393", "#fd79a8", "#fab1a0", "#ffd700"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Firework-like sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            fontSize: "24px",
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        className="text-center relative z-10 px-6"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-8"
        >
          💍
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6">
          She Said YES!
        </h1>
        <p className="text-2xl text-primary-foreground/80 font-body mb-12">
          ✨ Forever Valentine ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "She Said YES! 💍",
                  text: "My best friend said yes to being my forever Valentine! ❤️",
                  url: window.location.href,
                });
              }
            }}
            className="px-8 py-4 bg-primary-foreground text-deep-rose font-body font-bold rounded-full shadow-romantic"
          >
            Share This Moment 💕
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.print()}
            className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold rounded-full"
          >
            Take Screenshot 📸
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CelebrationPage;
