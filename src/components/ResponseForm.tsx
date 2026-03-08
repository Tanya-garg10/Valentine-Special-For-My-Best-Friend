import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const ResponseForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card shadow-romantic border border-border"
            >
              <h3 className="text-2xl font-display font-bold text-center mb-6 text-gradient">
                Leave a Message 💌
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name..."
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Write something sweet..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 gradient-romantic text-primary-foreground font-body font-bold rounded-lg shadow-soft"
                >
                  Send with Love ❤️
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-12 rounded-2xl bg-card shadow-romantic border border-border"
            >
              <Heart size={48} className="mx-auto text-primary mb-4" fill="currentColor" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                Thank you, {name}! 💕
              </h3>
              <p className="font-body text-muted-foreground">
                Your response has been saved forever ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResponseForm;
