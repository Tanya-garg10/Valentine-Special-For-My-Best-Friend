import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set your special date here (Valentine's Day 2026)
        const targetDate = new Date("2026-02-14T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 gradient-soft">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Calendar className="text-primary" size={32} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
                        Counting Down to Forever
                    </h2>
                </div>

                <p className="text-muted-foreground font-body text-lg mb-12">
                    Days until our next Valentine's Day together 💕
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-2xl p-6 shadow-romantic border border-primary/20"
                        >
                            <motion.div
                                key={item.value}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-5xl md:text-6xl font-display font-bold text-primary mb-2"
                            >
                                {item.value.toString().padStart(2, "0")}
                            </motion.div>
                            <div className="text-muted-foreground font-body text-sm uppercase tracking-wider">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
                >
                    <Clock size={20} />
                    <p className="font-body italic">
                        Every moment with you is worth the wait ✨
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CountdownTimer;
