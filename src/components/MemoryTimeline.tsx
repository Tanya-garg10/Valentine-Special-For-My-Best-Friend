import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";

const memories = [
  {
    title: "The Day We Met",
    description: "That random moment that changed everything. Who knew a simple hello would lead to all of this?",
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop",
    date: "January 2023",
    likes: 142,
  },
  {
    title: "Our Funniest Memory",
    description: "That time we couldn't stop laughing and everyone stared at us. Pure chaos, pure joy.",
    emoji: "😂",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop",
    date: "March 2023",
    likes: 98,
  },
  {
    title: "Midnight Talks",
    description: "3 AM conversations about life, dreams, and everything in between. Our best talks happen when the world sleeps.",
    emoji: "🌙",
    image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=400&h=400&fit=crop",
    date: "June 2023",
    likes: 156,
  },
  {
    title: "Our Favorite Photo",
    description: "That one picture where we both looked ridiculous but it's still our favorite. No filter needed.",
    emoji: "📸",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop",
    date: "September 2023",
    likes: 203,
  },
  {
    title: "Adventure Time",
    description: "That spontaneous trip where everything went wrong but somehow became our best memory.",
    emoji: "🗺️",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop",
    date: "November 2023",
    likes: 187,
  },
  {
    title: "Coffee & Chaos",
    description: "Our favorite cafe where we've solved all the world's problems over endless cups of coffee.",
    emoji: "☕",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop",
    date: "December 2023",
    likes: 134,
  },
];

const MemoryTimeline = () => {
  const [likedMemories, setLikedMemories] = useState<Set<number>>(new Set());
  const [showComments, setShowComments] = useState<number | null>(null);

  const toggleLike = (index: number) => {
    setLikedMemories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 px-6 gradient-soft relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-gradient"
      >
        Our Beautiful Journey 💫
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`relative mb-12 md:mb-16 flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } justify-center`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 hidden md:block shadow-romantic" />

            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              className={`polaroid max-w-sm w-full ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
            >
              {/* Image */}
              <div className="aspect-square bg-secondary rounded-sm overflow-hidden mb-3 relative group">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-semibold">{memory.date}</span>
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground text-center">
                {memory.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground text-center mt-1 mb-3">
                {memory.description}
              </p>

              {/* Interactive buttons */}
              <div className="flex items-center justify-center gap-4 pt-2 border-t border-border/50">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleLike(index)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                >
                  <Heart
                    size={18}
                    className={likedMemories.has(index) ? "fill-primary text-primary" : "text-muted-foreground"}
                  />
                  <span className={likedMemories.has(index) ? "text-primary" : "text-muted-foreground"}>
                    {memory.likes + (likedMemories.has(index) ? 1 : 0)}
                  </span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowComments(showComments === index ? null : index)}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>Comment</span>
                </motion.button>
              </div>

              {showComments === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 pt-3 border-t border-border/50"
                >
                  <p className="text-xs text-muted-foreground italic text-center">
                    "This memory will always be special to us 💕"
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryTimeline;
