import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, Copy, Check } from "lucide-react";

const LoveLetterGenerator = () => {
    const [name, setName] = useState("");
    const [letter, setLetter] = useState("");
    const [copied, setCopied] = useState(false);

    const templates = [
        {
            title: "Sweet & Simple",
            generate: (n: string) => `Dear ${n},\n\nEvery moment with you feels like magic. You light up my world in ways I never thought possible. Your smile, your laugh, your kindness - everything about you makes my heart skip a beat.\n\nI'm so grateful to have you in my life. You're not just my best friend, you're my favorite person in the entire world.\n\nWith all my love,\nYour Forever Friend 💕`,
        },
        {
            title: "Poetic & Romantic",
            generate: (n: string) => `My Dearest ${n},\n\nLike stars that shine in the darkest night,\nYou bring warmth and endless light.\nIn every laugh, in every smile,\nYou make this journey so worthwhile.\n\nYour presence is a gift so rare,\nA treasure beyond compare.\nThrough ups and downs, you're always there,\nShowing me how much you care.\n\nForever grateful, forever true,\nMy heart belongs with you.\n\nYours always,\nYour Admirer ✨`,
        },
        {
            title: "Fun & Playful",
            generate: (n: string) => `Hey ${n}! 🎉\n\nSo... I've been thinking (dangerous, I know 😄). You're basically the coolest person ever. Like, seriously.\n\nYou make boring days fun, sad days better, and good days absolutely amazing. You're the peanut butter to my jelly, the cheese to my pizza, the... okay, I'll stop with the food analogies 😂\n\nBut real talk? You're incredible. And I'm super lucky to know you.\n\nStay awesome!\nYour Partner in Crime 🚀`,
        },
    ];

    const generateLetter = (template: typeof templates[0]) => {
        if (!name.trim()) {
            setLetter("Please enter a name first! 💕");
            return;
        }
        setLetter(template.generate(name));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(letter);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 px-6 gradient-soft">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <Mail className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                        Love Letter Generator 💌
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Generate a beautiful love letter in seconds!
                    </p>
                </div>

                <div className="glass rounded-3xl p-8 shadow-romantic">
                    {/* Name Input */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-foreground mb-3">
                            Who is this letter for?
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter their name..."
                            className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                        />
                    </div>

                    {/* Template Buttons */}
                    <div className="mb-8">
                        <p className="text-sm font-semibold text-foreground mb-4">
                            Choose a style:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {templates.map((template, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => generateLetter(template)}
                                    className="p-4 rounded-xl border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all text-center"
                                >
                                    <Sparkles className="mx-auto mb-2 text-primary" size={24} />
                                    <p className="font-semibold text-foreground">{template.title}</p>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Generated Letter */}
                    {letter && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative"
                        >
                            <div className="bg-background rounded-xl p-6 border-2 border-primary/20 min-h-[300px]">
                                <pre className="font-body text-foreground whitespace-pre-wrap leading-relaxed">
                                    {letter}
                                </pre>
                            </div>

                            {/* Copy Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={copyToClipboard}
                                className="mt-4 w-full py-3 gradient-romantic text-primary-foreground font-semibold rounded-xl shadow-romantic flex items-center justify-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <Check size={20} />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy size={20} />
                                        Copy Letter
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    )}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-muted-foreground mt-6 italic"
                >
                    💡 Tip: Personalize the letter by adding your own special memories!
                </motion.p>
            </motion.div>
        </section>
    );
};

export default LoveLetterGenerator;
