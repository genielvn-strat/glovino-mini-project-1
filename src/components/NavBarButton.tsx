"use client";

import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavBarButtonProps {
    icon: React.ReactNode;
    title?: string;
    href: string;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({
    icon,
    title = "None",
    href,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const currentPath = usePathname();

    return (
        <div className="relative flex flex-col items-center ">
            <Link
                href={href}
                className={
                    currentPath !== href
                        ? "bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-gray-700 border-2 border-gray-400 min-h-16 min-w-16"
                        : "bg-gray-600 hover:bg-gray-700 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-gray-200 border-2 border-gray-200 min-h-16 min-w-16"
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="text-3xl">{icon}</span>
            </Link>
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        className="mt-2 text-sm absolute self-center bottom-0 user-select-none cursor-default"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 25 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                    >
                        {title}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBarButton;
