import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface HeroSectionProps {
  onContinue: () => void;
}

const HeroSection = ({ onContinue }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-foreground/20"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: "-100%",
            opacity: [0, 0.6, 0],
            x: [0, Math.random() * 60 - 30, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "linear",
          }}
          style={{
            left: `${15 + i * 14}%`,
            fontSize: `${20 + Math.random() * 30}px`,
          }}
        >
          ♥
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto text-primary-foreground animate-bounce-heart" fill="currentColor" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight"
        >
          Hey Best Friend,
          <br />
          <span className="text-primary-foreground/90 italic">
            I have something special for you…
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-primary-foreground/80 text-lg md:text-xl font-body mb-10"
        >
          Scroll through our journey together 💕
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-10 py-4 bg-primary-foreground text-deep-rose font-body font-semibold rounded-full shadow-romantic text-lg transition-all duration-300 pulse-glow"
        >
          Click to Continue 💌
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
