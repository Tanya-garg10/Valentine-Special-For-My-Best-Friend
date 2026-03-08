import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const quotes = [
    {
        text: "You're not just my best friend, you're my favorite person in the whole world.",
        author: "Us",
    },
    {
        text: "In a world full of temporary things, you are a perpetual feeling.",
        author: "Sanober Khan",
    },
    {
        text: "Best friends are the people you can do anything and nothing with and still have the best time.",
        author: "Unknown",
    },
    {
        text: "A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face.",
        author: "Unknown",
    },
    {
        text: "We didn't realize we were making memories, we just knew we were having fun.",
        author: "Winnie the Pooh",
    },
];

const LoveQuotes = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-primary/10 text-8xl">❝</div>
            <div className="absolute bottom-10 right-10 text-primary/10 text-8xl rotate-180">❝</div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Quote className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
                        Words That Describe Us
                    </h2>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuote}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-[200px] flex flex-col items-center justify-center"
                    >
                        <p className="text-2xl md:text-3xl font-display text-foreground mb-6 italic leading-relaxed">
                            "{quotes[currentQuote].text}"
                        </p>
                        <p className="text-lg text-muted-foreground font-body">
                            — {quotes[currentQuote].author}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Dots indicator */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    {quotes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentQuote(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentQuote
                                    ? "bg-primary w-8"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoveQuotes;
