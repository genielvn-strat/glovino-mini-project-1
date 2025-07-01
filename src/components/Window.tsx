"use client";
import React from "react";
import { motion } from "framer-motion";

interface WindowProps {
    title?: string;
    children?: React.ReactNode;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    maxWidth?: number;
    noPadding?: boolean;
}

const Window: React.FC<WindowProps> = ({
    title = "Untitled",
    children,
    left,
    right,
    top,
    bottom,
    maxWidth = 768,
    noPadding = false,
}) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="rounded-xl shadow-lg border border-gray-300 bg-white w-full max-w-3xl mx-auto overflow-hidden"
            style={{
                position:
                    left !== undefined ||
                    right !== undefined ||
                    top !== undefined ||
                    bottom !== undefined
                        ? "absolute"
                        : "static",
                left: left !== undefined ? `${left}px` : undefined,
                right: right !== undefined ? `${right}px` : undefined,
                top: top !== undefined ? `${top}px` : undefined,
                bottom: bottom !== undefined ? `${bottom}px` : undefined,
                maxWidth: `${maxWidth}px`,
            }}
        >
            <div className="relative flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 pointer-events-none select-none">
                    {title}
                </div>
            </div>

            {/* Window content */}
            <div
                className="p-4"
                style={{ padding: !noPadding ? "1rem" : "0px" }}
            >
                {children}
            </div>
        </motion.div>
    );
};

export default Window;
