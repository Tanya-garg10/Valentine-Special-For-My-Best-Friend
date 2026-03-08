import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
    {
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
        caption: "Best friends forever 💕",
    },
    {
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop",
        caption: "Making memories together ✨",
    },
    {
        url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop",
        caption: "Laughing until we cry 😂",
    },
    {
        url: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&h=600&fit=crop",
        caption: "Late night adventures 🌙",
    },
    {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        caption: "Exploring the world 🗺️",
    },
    {
        url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
        caption: "Coffee dates ☕",
    },
];

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const nextPhoto = () => {
        if (selectedPhoto !== null) {
            setSelectedPhoto((selectedPhoto + 1) % photos.length);
        }
    };

    const prevPhoto = () => {
        if (selectedPhoto !== null) {
            setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
        }
    };

    return (
        <section className="py-24 px-6 bg-background">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-gradient"
            >
                Our Photo Gallery 📸
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedPhoto(index)}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-soft"
                    >
                        <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedPhoto !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <button
                        onClick={() => setSelectedPhoto(null)}
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevPhoto();
                        }}
                        className="absolute left-4 text-white hover:text-primary transition-colors"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextPhoto();
                        }}
                        className="absolute right-4 text-white hover:text-primary transition-colors"
                    >
                        <ChevronRight size={48} />
                    </button>

                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src={photos[selectedPhoto].url}
                            alt={photos[selectedPhoto].caption}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-white text-center mt-4 text-lg font-body">
                            {photos[selectedPhoto].caption}
                        </p>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default PhotoGallery;
