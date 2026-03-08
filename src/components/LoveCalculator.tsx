import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Calculator } from "lucide-react";
import confetti from "canvas-confetti";

const LoveCalculator = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [calculating, setCalculating] = useState(false);

    const calculateLove = () => {
        if (!name1.trim() || !name2.trim()) return;

        setCalculating(true);
        setResult(null);

        // Simulate calculation with animation
        setTimeout(() => {
            // Generate a "random" but consistent result based on names
            const combined = (name1 + name2).toLowerCase();
            let sum = 0;
            for (let i = 0; i < combined.length; i++) {
                sum += combined.charCodeAt(i);
            }

            // Generate percentage between 70-99 for romantic effect
            const lovePercentage = 70 + (sum % 30);

            setResult(lovePercentage);
            setCalculating(false);

            // Confetti for high scores
            if (lovePercentage >= 85) {
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.6 },
                    colors: ["#e84393", "#fd79a8", "#fab1a0"],
                });
            }
        }, 2000);
    };

    const getMessage = (percentage: number) => {
        if (percentage >= 95) return "Perfect Match! 💕 You two are meant to be together!";
        if (percentage >= 85) return "Amazing Connection! ✨ Your bond is truly special!";
        if (percentage >= 75) return "Great Chemistry! 💖 You make each other happy!";
        return "Beautiful Friendship! 🌸 Your connection is wonderful!";
    };

    const reset = () => {
        setName1("");
        setName2("");
        setResult(null);
    };

    return (
        <section className="py-24 px-6 gradient-soft">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <div className="text-center mb-12">
                    <Calculator className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                        Love Calculator 💕
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Calculate the love percentage between two people!
                    </p>
                </div>

                <div className="glass rounded-3xl p-8 shadow-romantic">
                    {result === null ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            {/* Input Fields */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name1}
                                        onChange={(e) => setName1(e.target.value)}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                                        disabled={calculating}
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <Heart className="text-primary" size={32} fill="currentColor" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">
                                        Their Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name2}
                                        onChange={(e) => setName2(e.target.value)}
                                        placeholder="Enter their name"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                                        disabled={calculating}
                                    />
                                </div>
                            </div>

                            {/* Calculate Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={calculateLove}
                                disabled={!name1.trim() || !name2.trim() || calculating}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${!name1.trim() || !name2.trim() || calculating
                                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                                        : "gradient-romantic text-primary-foreground shadow-romantic hover:shadow-xl"
                                    }`}
                            >
                                {calculating ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles size={20} />
                                        </motion.div>
                                        Calculating Love...
                                    </span>
                                ) : (
                                    "Calculate Love 💕"
                                )}
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center space-y-6"
                        >
                            {/* Result Display */}
                            <div className="relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.8 }}
                                    className="relative inline-block"
                                >
                                    <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200">
                                        {/* Background circle */}
                                        <circle
                                            cx="100"
                                            cy="100"
                                            r="90"
                                            fill="none"
                                            stroke="hsl(var(--muted))"
                                            strokeWidth="12"
                                        />
                                        {/* Progress circle */}
                                        <motion.circle
                                            cx="100"
                                            cy="100"
                                            r="90"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="12"
                                            strokeLinecap="round"
                                            strokeDasharray={`${2 * Math.PI * 90}`}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 90 }}
                                            animate={{ strokeDashoffset: 2 * Math.PI * 90 * (1 - result / 100) }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            transform="rotate(-90 100 100)"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#e84393" />
                                                <stop offset="100%" stopColor="#fd79a8" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.5, type: "spring" }}
                                        >
                                            <div className="text-6xl font-display font-bold text-gradient">
                                                {result}%
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Names */}
                            <div className="text-xl font-semibold text-foreground">
                                {name1} 💕 {name2}
                            </div>

                            {/* Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="bg-primary/10 rounded-xl p-6 border-2 border-primary/20"
                            >
                                <p className="text-lg font-body text-foreground">
                                    {getMessage(result)}
                                </p>
                            </motion.div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={reset}
                                    className="flex-1 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                                >
                                    Try Again 🔄
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: "Love Calculator Result",
                                                text: `${name1} and ${name2} have ${result}% love compatibility! 💕`,
                                            });
                                        }
                                    }}
                                    className="flex-1 py-3 rounded-xl gradient-romantic text-primary-foreground font-semibold shadow-romantic"
                                >
                                    Share Result 💌
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Fun Facts */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center text-sm text-muted-foreground italic"
                >
                    💡 Fun fact: True love isn't measured in percentages, but in moments shared together!
                </motion.div>
            </motion.div>
        </section>
    );
};

export default LoveCalculator;
