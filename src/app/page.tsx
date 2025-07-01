"use client";
import CallingCard from "@/components/CallingCard";
import FullPageSection from "@/components/FullPageSection";
import Socials from "@/components/Social";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
    const [showHeading, setShowHeading] = useState(true);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowHeading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <FullPageSection>
                <AnimatePresence mode="wait">
                    {showHeading ? (
                        <motion.h1
                            key="welcome-message"
                            className="text-center absolute"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {"Let's build our imagination together."}
                        </motion.h1>
                    ) : (
                        <>
                            <motion.div
                                key="calling-card"
                                className="w-full flex items-center justify-center"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <CallingCard
                                    flipped={flipped}
                                    setFlipped={setFlipped}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-0 flex gap-8"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                <Socials />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </FullPageSection>
        </>
    );
}
