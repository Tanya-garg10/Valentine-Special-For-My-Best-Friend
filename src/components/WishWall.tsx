import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Heart, Send, Trash2 } from "lucide-react";

interface Wish {
    id: number;
    text: string;
    color: string;
}

const colors = [
    "from-pink-400 to-rose-400",
    "from-purple-400 to-pink-400",
    "from-rose-400 to-orange-400",
    "from-indigo-400 to-purple-400",
    "from-fuchsia-400 to-pink-400",
];

const WishWall = () => {
    const [wishes, setWishes] = useState<Wish[]>([
        { id: 1, text: "You make every day brighter! ✨", color: colors[0] },
        { id: 2, text: "Best friend forever! 💕", color: colors[1] },
        { id: 3, text: "Thanks for always being there 🌟", color: colors[2] },
    ]);
    const [newWish, setNewWish] = useState("");
    const [showInput, setShowInput] = useState(false);

    const addWish = () => {
        if (!newWish.trim()) return;

        const wish: Wish = {
            id: Date.now(),
            text: newWish,
            color: colors[Math.floor(Math.random() * colors.length)],
        };

        setWishes([wish, ...wishes]);
        setNewWish("");
        setShowInput(false);
    };

    const deleteWish = (id: number) => {
        setWishes(wishes.filter((w) => w.id !== id));
    };

    return (
        <section className="py-24 px-6 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <div className="text-center mb-12">
                    <MessageSquare className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                        Wish Wall 💌
                    </h2>
                    <p className="text-muted-foreground font-body">
                        Leave sweet messages and wishes on the wall!
                    </p>
                </div>

                {/* Add Wish Button */}
                <div className="text-center mb-8">
                    {!showInput ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowInput(true)}
                            className="px-8 py-3 gradient-romantic text-primary-foreground font-semibold rounded-full shadow-romantic inline-flex items-center gap-2"
                        >
                            <Heart size={20} />
                            Add Your Wish
                        </motion.button>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-md mx-auto glass rounded-2xl p-6 shadow-romantic"
                        >
                            <textarea
                                value={newWish}
                                onChange={(e) => setNewWish(e.target.value)}
                                placeholder="Write your sweet message here... 💕"
                                className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground resize-none"
                                rows={3}
                                autoFocus
                            />
                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={addWish}
                                    disabled={!newWish.trim()}
                                    className="flex-1 py-2 gradient-romantic text-primary-foreground font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    <Send size={18} />
                                    Post
                                </button>
                                <button
                                    onClick={() => {
                                        setShowInput(false);
                                        setNewWish("");
                                    }}
                                    className="px-6 py-2 border-2 border-primary/20 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Wishes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence>
                        {wishes.map((wish, index) => (
                            <motion.div
                                key={wish.id}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className={`relative bg-gradient-to-br ${wish.color} p-6 rounded-2xl shadow-soft text-white min-h-[150px] flex flex-col justify-between`}
                                style={{
                                    transform: `rotate(${Math.random() * 6 - 3}deg)`,
                                }}
                            >
                                <p className="font-body text-base leading-relaxed">{wish.text}</p>

                                <button
                                    onClick={() => deleteWish(wish.id)}
                                    className="absolute top-2 right-2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors opacity-0 hover:opacity-100 group-hover:opacity-100"
                                    title="Delete wish"
                                >
                                    <Trash2 size={16} />
                                </button>

                                <div className="flex items-center justify-between mt-4">
                                    <Heart size={16} fill="currentColor" />
                                    <span className="text-xs opacity-80">
                                        {new Date().toLocaleDateString()}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {wishes.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-muted-foreground"
                    >
                        <p className="text-lg">No wishes yet. Be the first to add one! 💕</p>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default WishWall;
