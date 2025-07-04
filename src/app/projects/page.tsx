import Project from "@/components/Project";
import ScrollablePageSection from "@/components/ScrollablePageSection";

export default function Projects() {
    return (
        <ScrollablePageSection>
            <div className="w-full max-w-[768px]">
                <h1 className="mb-4">Personal Projects</h1>
                <p>
                    Here are my projects I made personally during my free time
                    and as a hobby.
                </p>
            </div>
            <Project
                author="lezzthanthree"
                title="SEKAI-Stories"
                description="A Dialogue Generator for making fan-made stories from the game Project SEKAI COLORFUL STAGE!"
                tags={[
                    "nodejs",
                    "react",
                    "typescript",
                    "vite",
                    "sass",
                    "live2d",
                    "pixijs",
                    "i18next",
                    "cloudflare-pages",
                ]}
                imgSrc="/sekai-stories.png"
            />
            <Project
                author="lezzthanthree"
                title="SIFAS-Dialogue-Sandbox"
                description="A Dialogue Sandbox for generating fan-made stories from the now-shut down game, Love Live! School Idol Festival All Stars"
                tags={[
                    "nodejs",
                    "react",
                    "javascript",
                    "vite",
                    "sass",
                    "i18next",
                    "vercel",
                    "netlify",
                ]}
                imgSrc="/sifas.png"
            />
            <div className="w-full max-w-[768px]">
                <h1 className="mb-4">College Projects</h1>
                <p>
                    These are the projects assigned by our instructors that I completed during my time at university.
                </p>
            </div>
            <Project
                author="genielvn"
                title="Liham"
                description="A web-based platform designed to foster open, respectful, and meaningful discussions among Philippine university students with anonymity."
                tags={[
                    "nodejs",
                    "nextjs",
                    "sqlite",
                    "typescript",
                    "python",
                    "conda",
                    "django",
                    "sass",
                    "authjs",
                ]}
                imgSrc="/4uni.png"
            />
            <Project
                author="genielvn"
                title="PDF-Keyword-Search-Engine"
                description="A tool to search keywords on multiple PDF files using Boyer-Moore Search Matching Algorithm."
                tags={[
                    "python",
                    "tkinter",
                    "algorithm",
                    "boyer-moore-algorithm",
                    
                ]}
                imgSrc="/pdf-search.png"
            />
        </ScrollablePageSection>
    );
}
