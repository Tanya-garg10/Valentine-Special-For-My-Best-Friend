import { motion } from "framer-motion";
import { Sparkles, Plane, Phone, Popcorn, Camera, Coffee, Music } from "lucide-react";

const predictions = [
    {
        icon: Popcorn,
        title: "Movie Nights",
        description: "Endless Netflix binges and popcorn fights",
        color: "from-pink-500 to-rose-500",
    },
    {
        icon: Phone,
        title: "Late Night Calls",
        description: "3 AM conversations about everything and nothing",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Plane,
        title: "Travel Adventures",
        description: "Exploring the world together, one trip at a time",
        color: "from-blue-500 to-purple-500",
    },
    {
        icon: Camera,
        title: "More Memories",
        description: "Creating moments we'll laugh about forever",
        color: "from-orange-500 to-pink-500",
    },
    {
        icon: Coffee,
        title: "Coffee Dates",
        description: "Solving world problems over endless cups",
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: Music,
        title: "Concert Nights",
        description: "Dancing like nobody's watching",
        color: "from-indigo-500 to-purple-500",
    },
];

const FuturePredictions = () => {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 text-primary/5 text-9xl">✨</div>
            <div className="absolute bottom-20 right-10 text-primary/5 text-9xl">💫</div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto relative z-10"
            >
                <div className="text-center mb-16">
                    <Sparkles className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                        Our Future Together ✨
                    </h2>
                    <p className="text-muted-foreground font-body text-lg">
                        Here's what awaits us on this beautiful journey...
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {predictions.map((prediction, index) => {
                        const Icon = prediction.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${prediction.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />

                                <div className="relative glass rounded-2xl p-6 shadow-soft border border-border hover:border-primary/40 transition-all h-full">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${prediction.color} mb-4`}>
                                        <Icon className="text-white" size={32} />
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                                        {prediction.title}
                                    </h3>

                                    <p className="text-muted-foreground font-body">
                                        {prediction.description}
                                    </p>

                                    {/* Animated sparkle on hover */}
                                    <motion.div
                                        className="absolute top-4 right-4 text-primary"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    >
                                        ✨
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto shadow-romantic border border-primary/20">
                        <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed">
                            "The best is yet to come, and it's going to be{" "}
                            <span className="text-gradient font-bold">amazing</span> because we'll be together."
                        </p>
                        <p className="text-muted-foreground mt-4 font-body">
                            💕 Here's to our beautiful future 💕
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FuturePredictions;
