import {PROJECTS} from "@/constant";
import Image from "next/image"
import {
    SiCss3,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiReact,
    SiTailwindcss
} from "react-icons/si";
import {BiLogoNodejs, BiLogoPython} from "react-icons/bi";

export default function Project(){
    return (
        <div className="border-b border-neutral-900 pb-4 container px-4">
            <h2 className="text-center my-20 text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex gap-4 md:gap-16  md:items-start justify-around">
                        <Image src={project.image} alt="project" width={150} height={150} className={` border rounded-md w-1/4 lg:w-1/6 overflow-hidden ${index === 0? 'bg-white':""}`} />
                        <div className="flex flex-col gap-2 items-start w-4/5">
                            <p className="font-semibold">{project.title}</p>
                            <p className="font-thin">{project.description}</p>
                            <div className="flex gap-2">
                                {project.technologies.map((technology, index) => (

                                    <div className="border rounded-md px-3 py-2 text-3xl" key={index}>
                                        {(() => { // Immediately invoked function expression (IIFE)
                                            switch (technology.toLowerCase()) {
                                                case 'html':
                                                    return <SiHtml5 style={{ color: "#E34F26" }} />;
                                                case 'css':
                                                    return <SiCss3 style={{ color: "#1572B6" }} />;
                                                case 'javascript':
                                                    return <SiJavascript style={{ color: "#F7DF1E" }} />;
                                                case 'react':
                                                    return <SiReact style={{ color: "#61DAFB" }} />;
                                                case 'node.js':
                                                    return <BiLogoNodejs style={{ color: "#339933" }} />;
                                                case 'pandas':
                                                    return <SiPandas style={{ color: "#150458" }} />;
                                                case 'numpy':
                                                    return <SiNumpy style={{ color: "#013243" }} />;
                                                case 'python':
                                                    return <BiLogoPython style={{color : "#3776AB"}} />
                                                case 'express':
                                                    return <SiExpress style={{ color: "#FFFFFF" }} />
                                                case 'mysql':
                                                    return <SiMysql style={{ color: "#4479A1" }} />;
                                                case 'mongodb':
                                                    return <SiMongodb style={{ color: "#47A248" }} />;
                                                case 'tailwindcss':
                                                    return <SiTailwindcss style={{ color: "#38B2AC" }} />;
                                                default:
                                                    return null; // Handle cases where the technology is not recognized
                                            }
                                        })()}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}