import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Star, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const CompatibilityMeter = () => {
    const [percentage, setPercentage] = useState(0);
    const [started, setStarted] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const targetPercentage = 98; // High compatibility!

    const startCalculation = () => {
        setStarted(true);
        setShowResult(false);
        setPercentage(0);

        // Animate percentage
        let current = 0;
        const interval = setInterval(() => {
            current += 2;
            setPercentage(current);

            if (current >= targetPercentage) {
                clearInterval(interval);
                setShowResult(true);

                // Confetti celebration
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ["#e84393", "#fd79a8", "#fab1a0", "#ffd700"],
                });
            }
        }, 30);
    };

    const getCompatibilityMessage = () => {
        if (percentage >= 95) return "Perfect Match! 💕";
        if (percentage >= 85) return "Amazing Chemistry! ✨";
        if (percentage >= 75) return "Great Connection! 💖";
        return "Beautiful Bond! 🌟";
    };

    const getDetailedMessage = () => {
        return "You two are like peanut butter and jelly - absolutely perfect together! Your friendship compatibility is off the charts! 🚀";
    };

    return (
        <section className="py-24 px-6 gradient-soft">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <div className="text-center mb-12">
                    <Zap className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                        Friendship Compatibility 💫
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Let's see how compatible we really are!
                    </p>
                </div>

                <div className="glass rounded-3xl p-8 md:p-12 shadow-romantic">
                    {!started ? (
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-center"
                        >
                            <div className="mb-8">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="inline-block"
                                >
                                    <Heart size={80} className="text-primary" fill="currentColor" />
                                </motion.div>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                                Ready to discover our compatibility?
                            </h3>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startCalculation}
                                className="px-10 py-4 gradient-romantic text-primary-foreground font-bold text-xl rounded-full shadow-romantic"
                            >
                                Calculate Now! ✨
                            </motion.button>
                        </motion.div>
                    ) : (
                        <div className="text-center">
                            {/* Circular Progress */}
                            <div className="relative inline-block mb-8">
                                <svg className="w-64 h-64" viewBox="0 0 200 200">
                                    {/* Background circle */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="85"
                                        fill="none"
                                        stroke="hsl(var(--muted))"
                                        strokeWidth="15"
                                    />

                                    {/* Progress circle */}
                                    <motion.circle
                                        cx="100"
                                        cy="100"
                                        r="85"
                                        fill="none"
                                        stroke="url(#compatibilityGradient)"
                                        strokeWidth="15"
                                        strokeLinecap="round"
                                        strokeDasharray={`${2 * Math.PI * 85}`}
                                        initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                                        animate={{ strokeDashoffset: 2 * Math.PI * 85 * (1 - percentage / 100) }}
                                        transform="rotate(-90 100 100)"
                                    />

                                    <defs>
                                        <linearGradient id="compatibilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#e84393" />
                                            <stop offset="50%" stopColor="#fd79a8" />
                                            <stop offset="100%" stopColor="#ffd700" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Percentage in center */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.div
                                        key={percentage}
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        className="text-6xl font-display font-bold text-gradient"
                                    >
                                        {percentage}%
                                    </motion.div>
                                    {showResult && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-sm text-muted-foreground mt-2"
                                        >
                                            {getCompatibilityMessage()}
                                        </motion.div>
                                    )}
                                </div>

                                {/* Floating icons */}
                                {showResult && (
                                    <>
                                        {[Star, Heart, Sparkles, Zap].map((Icon, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute text-primary"
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    scale: [0, 1, 0],
                                                    x: [0, (i % 2 ? 1 : -1) * 50],
                                                    y: [0, -50],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                }}
                                                style={{
                                                    left: `${50 + (i % 2 ? 20 : -20)}%`,
                                                    top: `${50 + (i < 2 ? -20 : 20)}%`,
                                                }}
                                            >
                                                <Icon size={24} />
                                            </motion.div>
                                        ))}
                                    </>
                                )}
                            </div>

                            {/* Result Message */}
                            {showResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-4"
                                >
                                    <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/20">
                                        <p className="text-lg font-body text-foreground">
                                            {getDetailedMessage()}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="glass rounded-lg p-4">
                                            <div className="text-2xl mb-1">💕</div>
                                            <div className="text-xs text-muted-foreground">Chemistry</div>
                                            <div className="text-sm font-bold text-primary">Perfect</div>
                                        </div>
                                        <div className="glass rounded-lg p-4">
                                            <div className="text-2xl mb-1">🎯</div>
                                            <div className="text-xs text-muted-foreground">Vibe</div>
                                            <div className="text-sm font-bold text-primary">Amazing</div>
                                        </div>
                                        <div className="glass rounded-lg p-4">
                                            <div className="text-2xl mb-1">✨</div>
                                            <div className="text-xs text-muted-foreground">Bond</div>
                                            <div className="text-sm font-bold text-primary">Unbreakable</div>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setStarted(false);
                                            setPercentage(0);
                                            setShowResult(false);
                                        }}
                                        className="mt-6 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors"
                                    >
                                        Calculate Again 🔄
                                    </motion.button>
                                </motion.div>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default CompatibilityMeter;
