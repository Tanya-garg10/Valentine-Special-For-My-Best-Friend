import { motion } from "framer-motion";
import { useState } from "react";
import { Laugh } from "lucide-react";

const jokes = [
  {
    text: "Remember when we laughed for 20 minutes straight? 😂",
    emoji: "🤣",
    color: "from-pink-500 to-rose-500",
    backText: "That day at the park when we couldn't stop laughing and everyone thought we were crazy! Best day ever! 😄"
  },
  {
    text: "You still owe me fries 🍟",
    emoji: "😤",
    color: "from-orange-500 to-amber-500",
    backText: "Remember that time you said 'just one fry' and ate half my plate? I'm still keeping count! 😂"
  },
  {
    text: "Our chaos moments are unmatched 🔥",
    emoji: "💀",
    color: "from-red-500 to-pink-500",
    backText: "Every adventure with you turns into beautiful chaos. That's what makes us special! 🎉"
  },
  {
    text: "That inside joke nobody else gets 🤫",
    emoji: "😏",
    color: "from-purple-500 to-pink-500",
    backText: "You know exactly which one I'm talking about. Just thinking about it makes me smile! 😊"
  },
  {
    text: "\"One more episode\" at 3 AM 📺",
    emoji: "😴",
    color: "from-blue-500 to-purple-500",
    backText: "We've said this a million times and never stopped at just one. Our binge-watching record is legendary! 🌙"
  },
  {
    text: "We finish each other's sentences ✨",
    emoji: "🧠",
    color: "from-indigo-500 to-purple-500",
    backText: "It's like we share the same brain sometimes. Twin telepathy is real with us! 💭"
  },
  {
    text: "That embarrassing moment we never talk about 🙈",
    emoji: "😳",
    color: "from-rose-500 to-pink-500",
    backText: "We promised to never speak of it again... but we both know we'll never forget it! 🤐"
  },
  {
    text: "Our secret handshake that we always mess up 🤝",
    emoji: "😅",
    color: "from-green-500 to-teal-500",
    backText: "We've practiced it a hundred times and still can't get it right. But that's what makes it ours! 🤗"
  },
];

const InsideJokes = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
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
    <section className="py-24 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Laugh className="mx-auto text-primary mb-4" size={48} />
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
          Our Inside Jokes 🤭
        </h2>
        <p className="text-muted-foreground font-body mt-4">
          Click to reveal the memories behind each joke!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jokes.map((joke, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="perspective-1000"
          >
            <motion.div
              onClick={() => toggleFlip(index)}
              animate={{ rotateY: flippedCards.has(index) ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-48 cursor-pointer preserve-3d"
            >
              {/* Front */}
              <div
                className={`absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br ${joke.color} p-6 shadow-soft flex flex-col items-center justify-center text-white`}
              >
                <span className="text-5xl mb-3">{joke.emoji}</span>
                <p className="font-body font-medium text-center text-sm">{joke.text}</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 backface-hidden rounded-xl bg-card border-2 border-primary/20 p-6 shadow-soft flex items-center justify-center"
                style={{ transform: "rotateY(180deg)" }}
              >
                <p className="font-body text-sm text-center text-muted-foreground italic">
                  {joke.backText}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InsideJokes;
