"use client";
import { motion } from "framer-motion";
import React from "react";

interface Props {
    flipped: boolean;
    setFlipped: (val: boolean) => void;
}

const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
};

const CallingCard: React.FC<Props> = ({ flipped, setFlipped }) => {
    return (
        <div
            className="w-full max-w-[400px] h-[250px] [perspective:1000px]"
            onClick={() => setFlipped(!flipped)}
        >
            <motion.div
                className="relative w-full h-full"
                variants={cardVariants}
                initial={{ rotateY: 360 }}
                animate={flipped ? "back" : "front"}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute w-full h-full backface-hidden rounded-2xl border border-gray-300 shadow-md bg-white flex flex-col justify-center items-center overflow-hidden">
                    <div className="absolute top-4 right-6 text-gray-500 font-medium text-3xl text-right">
                        <p className="text-inherit">+63 998 123 4567</p>
                        <p className="text-right">Manila, PH</p>
                    </div>
                    <div className="flex flex-col items-center flex-1 justify-center">
                        <h3>Genesis Lovino</h3>
                        <div className="text-lg text-gray-600 mt-1">
                            Software Engineer
                        </div>
                        <div className="text-xs text-gray-600 ">
                            flip to contact
                        </div>
                    </div>
                    <div
                        className="absolute bottom-4 left-0 w-full flex justify-center gap-10"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <a
                            href="mailto:genesislovino@gmail.com"
                            className="text-gray-600 "
                            aria-label="Email"
                        >
                            <i className="bi bi-envelope-fill text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/genielvn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600"
                            aria-label="LinkedIn"
                        >
                            <i className="bi bi-linkedin text-2xl"></i>
                        </a>
                        <a
                            href="https://github.com/genielvn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600"
                            aria-label="GitHub"
                        >
                            <i className="bi bi-github text-2xl"></i>
                        </a>
                    </div>
                </div>
                        
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-gray-300 shadow-md bg-white p-6 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
                    <form
                        className="w-full flex flex-col gap-2 text-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border p-2 pl-3 pr-3 rounded-full"
                        />
                        <textarea
                            rows={3}
                            placeholder="Your message"
                            className="border p-2 px-3 rounded-3xl resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default CallingCard;
