"use client";

import "@/styles/tailwind.css";
import "@/styles/globals.scss";
import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BackToTopButton from "@/components/BackToTopButton";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [showNav, setShowNav] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const hideAtPosition = 100;
            if (currentScrollY > hideAtPosition) {
                setShowBackToTop(true);
                setShowNav(false);
            } else {
                setShowNav(true);
                setShowBackToTop(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
                ></link>
            </head>
            <body className="">
                {children}
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 1000,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                            opacity: showNav ? 1 : 0,
                            y: showNav ? 0 : -150,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <NavBar />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showBackToTop ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <BackToTopButton />
                </motion.div>
            </body>
        </html>
    );
}
