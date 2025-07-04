"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Carousel = ({ images }: { images: string[] }) => {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (
        <div className="relative w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={images[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={images[index]}
                        alt={`carousel-${index}`}
                        width={768}
                        height={512}
                        className="object-contain w-full h-full"
                    />
                </motion.div>
            </AnimatePresence>
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute h-full left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute h-full right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
};
