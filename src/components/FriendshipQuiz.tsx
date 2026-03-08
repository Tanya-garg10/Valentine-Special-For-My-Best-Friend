import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface Question {
    question: string;
    options: string[];
    correct: number;
    emoji: string;
}

const questions: Question[] = [
    {
        question: "What's your best friend's favorite color?",
        options: ["Red", "Blue", "Pink", "Purple"],
        correct: 2,
        emoji: "🎨",
    },
    {
        question: "What's their go-to comfort food?",
        options: ["Pizza", "Ice Cream", "Chocolate", "Fries"],
        correct: 1,
        emoji: "🍕",
    },
    {
        question: "What time do they usually wake up?",
        options: ["6-7 AM", "8-9 AM", "10-11 AM", "After 12 PM"],
        correct: 1,
        emoji: "⏰",
    },
    {
        question: "What's their favorite type of movie?",
        options: ["Action", "Romance", "Comedy", "Horror"],
        correct: 2,
        emoji: "🎬",
    },
    {
        question: "What's their biggest pet peeve?",
        options: ["Loud chewing", "Being late", "Messy rooms", "Slow internet"],
        correct: 1,
        emoji: "😤",
    },
];

const FriendshipQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answered, setAnswered] = useState(false);
    const [started, setStarted] = useState(false);

    const handleAnswer = (index: number) => {
        if (answered) return;

        setSelectedAnswer(index);
        setAnswered(true);

        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setAnswered(false);
            } else {
                setShowResult(true);
                if (score + (index === questions[currentQuestion].correct ? 1 : 0) >= 4) {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#e84393", "#fd79a8", "#fab1a0", "#ffd700"],
                    });
                }
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setAnswered(false);
        setStarted(false);
    };

    const getResultMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) return "Perfect! You know each other inside out! 🏆";
        if (percentage >= 80) return "Amazing! You're true best friends! ✨";
        if (percentage >= 60) return "Great! You know each other well! 💕";
        if (percentage >= 40) return "Not bad! Keep learning about each other! 🌟";
        return "Time to spend more quality time together! 💖";
    };

    if (!started) {
        return (
            <section className="py-24 px-6 bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <Brain className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                        Friendship Quiz 🧠
                    </h2>
                    <p className="text-muted-foreground font-body mb-8">
                        How well do you know your best friend? Take this quiz to find out!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setStarted(true)}
                        className="px-10 py-4 gradient-romantic text-primary-foreground font-bold text-xl rounded-full shadow-romantic"
                    >
                        Start Quiz 🚀
                    </motion.button>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="py-24 px-6 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                {!showResult ? (
                    <>
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                                <span>Question {currentQuestion + 1} of {questions.length}</span>
                                <span>Score: {score}</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    className="h-full gradient-romantic"
                                />
                            </div>
                        </div>

                        {/* Question Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="glass rounded-3xl p-8 shadow-romantic"
                            >
                                <div className="text-center mb-8">
                                    <span className="text-6xl mb-4 block">
                                        {questions[currentQuestion].emoji}
                                    </span>
                                    <h3 className="text-2xl font-display font-bold text-foreground">
                                        {questions[currentQuestion].question}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ scale: answered ? 1 : 1.02 }}
                                            whileTap={{ scale: answered ? 1 : 0.98 }}
                                            onClick={() => handleAnswer(index)}
                                            disabled={answered}
                                            className={`w-full p-4 rounded-xl font-semibold text-left transition-all flex items-center justify-between ${answered
                                                    ? index === questions[currentQuestion].correct
                                                        ? "bg-green-500 text-white"
                                                        : index === selectedAnswer
                                                            ? "bg-red-500 text-white"
                                                            : "bg-muted text-muted-foreground"
                                                    : "bg-card hover:bg-primary/10 border-2 border-border hover:border-primary text-foreground"
                                                }`}
                                        >
                                            <span>{option}</span>
                                            {answered && index === questions[currentQuestion].correct && (
                                                <CheckCircle size={24} />
                                            )}
                                            {answered && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                                                <XCircle size={24} />
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </>
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="glass rounded-3xl p-8 shadow-romantic text-center"
                    >
                        <Trophy className="mx-auto text-gold mb-6" size={80} />
                        <h3 className="text-4xl font-display font-bold text-gradient mb-4">
                            Quiz Complete! 🎉
                        </h3>
                        <div className="text-6xl font-display font-bold text-primary mb-4">
                            {score}/{questions.length}
                        </div>
                        <p className="text-xl text-foreground mb-8">
                            {getResultMessage()}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={resetQuiz}
                            className="px-8 py-3 gradient-romantic text-primary-foreground font-semibold rounded-full shadow-romantic inline-flex items-center gap-2"
                        >
                            <RotateCcw size={20} />
                            Take Quiz Again
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default FriendshipQuiz;
