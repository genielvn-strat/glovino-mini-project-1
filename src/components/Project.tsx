"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectProps {
    title: string;
    author: string;
    description?: string;
    tags?: string[];
    imgSrc?: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    author,
    description,
    imgSrc,
    tags,
}) => {
    return (
        <Link href={`/projects/${title}`} className="w-full max-w-[768px]">
            <motion.div
                className="w-full max-w-[768px] bg-white border-1 border-gray-400 rounded-lg shadow-sm overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                {imgSrc && (
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={imgSrc}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                )}

                <div className="space-y-3">
                    <div className="bg-gray-100 border-t-1 border-b-1 border-gray-400 flex items-center justify-between">
                        <div className="m-4 flex items-center text-gray-700 space-x-1">
                            <span className="font-medium">{author}</span>
                            <span className="text-gray-400">/</span>
                            <span className="hover:underline font-semibold text-sky-600">
                                {title}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 m-4">
                        {description && (
                            <p className="text-sm text-gray-700">
                                {description}
                            </p>
                        )}

                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-sky-100  text-xs text-sky-600 pl-2 pr-2 pt-1 pb-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default Project;
