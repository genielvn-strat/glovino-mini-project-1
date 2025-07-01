"use client";
import Window from "@/components/Window";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollablePageSection from "@/components/ScrollablePageSection";

export default function About() {
    return (
        <ScrollablePageSection>
            <Window title="profile.png" maxWidth={500}>
                <div className="relative max-w-[500px] aspect-square items-center">
                    <Image
                        src="/profile.png"
                        alt="profile"
                        width={500}
                        height={500}
                        className="object-cover"
                        sizes="(max-width: 500px) 100vw, 500px"
                    />
                    <motion.div
                        className="absolute inset-0 bg-white z-10 origin-bottom"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{ duration: 1.5, ease: "linear" }}
                    />
                </div>
            </Window>
            <Window title="README.md">
                <div className="text-gray-800 gap-2">
                    <h1 className="mb-4">About Me</h1>
                    <p className="mb-4">
                        {
                            "Hi, I'm Genesis Lovino, a software engineer with a passion for building thoughtful and impactful digital experiences. I enjoy turning complex problems into simple, elegant solutions."
                        }
                    </p>

                    <h2 className="mb-4">What I Do</h2>
                    <p className="mb-4">
                        {
                            "I specialize in full-stack development, primarily using technologies like React, Next.js, Django REST Framework, and PostgreSQL. I'm comfortable working across the stack, from designing APIs to crafting clean, responsive UIs."
                        }
                    </p>

                    <h2 className="mb-4">Tech I Use</h2>

                    <h3 className="mb-4">Programming Languages</h3>
                    <Image
                        src="https://skillicons.dev/icons?i=ts,js,cs,py,,,,"
                        alt="programming"
                        width={500}
                        height={200}
                        className="object-contain mb-4"
                    />

                    <h3 className="mb-4">Web Development</h3>
                    <Image
                        src="https://skillicons.dev/icons?i=django,nextjs,react,sass,jquery,bootstrap,sqlite,postgres"
                        alt="programming"
                        width={500}
                        height={200}
                        className="object-contain mb-4"
                    />
                    <h3 className="mb-4">Tools</h3>
                    <Image
                        src="https://skillicons.dev/icons?i=git,vscode,visualstudio,neovim,bash,,,"
                        alt="programming"
                        sizes="(max-width: 500px) 100vw, 500px"
                        width={500}
                        height={200}
                        className="object-contain mb-4"
                    />
                    <h2 className="mb-4">More About Me</h2>
                    <p className="mb-4">
                        {
                            "I'm currently pursuing a degree in Computer Science and actively building personal projects to sharpen my skills. Outside of programming, I'm interested in Japanese language learning, photography, rhythm games, and anime."
                        }
                    </p>
                </div>
            </Window>
        </ScrollablePageSection>
    );
}
