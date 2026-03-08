import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface SecretPasswordEntryProps {
    onUnlock: () => void;
}

const SecretPasswordEntry = ({ onUnlock }: SecretPasswordEntryProps) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [hint, setHint] = useState(false);

    // Secret password - customize this!
    const correctPassword = "bestfriend2024";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password.toLowerCase() === correctPassword) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#e84393", "#fd79a8", "#fab1a0", "#ffd700"],
            });

            setTimeout(() => {
                onUnlock();
            }, 1000);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
            {/* Animated background hearts */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-primary-foreground/10"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{
                        y: "-100%",
                        opacity: [0, 0.5, 0],
                        x: [0, Math.random() * 100 - 50, 0],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        delay: i * 1.5,
                        ease: "linear",
                    }}
                    style={{
                        left: `${10 + i * 12}%`,
                        fontSize: `${30 + Math.random() * 40}px`,
                    }}
                >
                    ♥
                </motion.div>
            ))}

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-md w-full mx-4"
            >
                <div className="glass rounded-3xl p-8 shadow-romantic border border-primary-foreground/20">
                    {/* Lock Icon */}
                    <motion.div
                        animate={error ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-6"
                    >
                        <Lock className="mx-auto text-primary-foreground mb-4" size={64} />
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center mb-3">
                        Secret Entry 🔐
                    </h1>
                    <p className="text-primary-foreground/80 text-center mb-8 font-body">
                        Only my best friend knows the password...
                    </p>

                    {/* Password Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter secret code"
                                className={`w-full px-4 py-4 rounded-xl border-2 outline-none transition-all text-center text-lg font-semibold ${error
                                        ? "border-red-500 bg-red-50 shake"
                                        : "border-primary-foreground/30 focus:border-primary-foreground bg-white/90"
                                    }`}
                                autoFocus
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-primary-foreground text-deep-rose font-bold text-lg rounded-xl shadow-romantic hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <Heart size={20} fill="currentColor" />
                            Unlock
                        </motion.button>
                    </form>

                    {/* Hint Button */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setHint(!hint)}
                            className="text-primary-foreground/70 hover:text-primary-foreground text-sm underline transition-colors"
                        >
                            {hint ? "Hide Hint" : "Need a hint? 💡"}
                        </button>

                        <AnimatePresence>
                            {hint && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-4 p-4 bg-primary-foreground/10 rounded-xl border border-primary-foreground/20"
                                >
                                    <p className="text-primary-foreground/90 text-sm italic flex items-center justify-center gap-2">
                                        <Sparkles size={16} />
                                        Hint: "bestfriend" + year we became close
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-primary-foreground/60 text-sm mt-6 italic"
                >
                    This moment is just for us 💕
                </motion.p>
            </motion.div>
        </div>
    );
};

export default SecretPasswordEntry;
