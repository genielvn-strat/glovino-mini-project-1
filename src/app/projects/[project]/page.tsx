import ScrollablePageSection from "@/components/ScrollablePageSection";
import dataJson from "./projects.json";

interface IProjectRecord {
    author: string;
    title: string;
    regTitle: string;
    description: string;
    tags: string[];
    imgSrc: string;
    sampleImages: string[];
    extension: string;
    github: string;
    website: string;
}

const data = dataJson as Record<string, IProjectRecord>;
import { notFound } from "next/navigation";
import Image from "next/image";
import Window from "@/components/Window";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";

interface ProjectNameProps {
    params: Promise<{
        project: string;
    }>;
}

export default async function ProjectName({ params }: ProjectNameProps) {
    const { project } = await params;

    if (!data[project]) return notFound();

    const projectData = data[project];
    console.log(projectData)

    return (
        <ScrollablePageSection>
            <div className="flex flex-col w-full relative gap-4">
                <Link href="/projects" className="font-bold">
                    ← Projects/
                </Link>
                <h1>{projectData.regTitle}</h1>
                <p>{projectData.description}</p>
                <Window
                    title={`${projectData.title}.${projectData.extension}`}
                    noPadding={true}
                >

                    <Carousel images={projectData.sampleImages}/>
                </Window>
                <h2>Stack</h2>
                <Image
                    src={`https://skillicons.dev/icons?i=${projectData.tags
                        .slice(0, 7)
                        .join(",")}&perline=8`}
                    alt="stack"
                    width={768}
                    height={512}
                />
                <div className="flex w-full pt-4 gap-4">
                    {projectData.github && (
                        <Link
                            className="bg-gray-950 text-gray-50 w-full flex justify-center rounded-2xl p-2"
                            href={projectData.github}
                        >
                            <span>
                                <i className="bi bi-github" /> GitHub
                            </span>
                        </Link>
                    )}
                    {projectData.website && (
                        <Link
                            className="bg-green-600  text-gray-50 w-full flex justify-center rounded-2xl p-2"
                            href={projectData.website}
                        >
                            <span>
                                <i className="bi bi-window" /> Website
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </ScrollablePageSection>
    );
}
