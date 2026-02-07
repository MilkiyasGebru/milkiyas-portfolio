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
    SiTailwindcss,
    SiTypescript,
    SiPostgresql,
    SiSequelize,
    SiJsonwebtokens
} from "react-icons/si";
import {BiLogoNodejs, BiLogoPython} from "react-icons/bi";
import { FaGithub,FaYoutube, FaExternalLinkAlt} from "react-icons/fa";

import Link from "next/link";
// The Project Section
export default function Project(){
    return (
        <div className="border-b border-neutral-900 pb-4 container px-3">
            <h2 className="text-center my-20 text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex gap-4 flex-col items-center md:gap-16 md:flex-row  md:items-start justify-around ">
                        <Image src={project.image} alt="project" width={150} height={150} className={` aspect-square border rounded-md w-2/5 lg:w-1/6  ${index === 2? 'bg-white':""} `} />
                        <div className="flex flex-col gap-2 items-start w-full">
                            <div className="flex gap-x-1 items-center">
                                <p className="font-semibold">{project.title}</p>
                                {project.website !== "" &&
                                    <div  className=" px-3 py-2  text-xl text-white hover:text-2xl">
                                        <Link href={project.website} target="_blank">
                                            <FaExternalLinkAlt />
                                        </Link>

                                    </div>}

                                {project.youtube !== "" &&
                                    <div  className=" px-3 py-2  text-xl text-red-600 hover:text-2xl duration-500">
                                        <Link href={project.youtube} target="_blank">
                                            <FaYoutube/>

                                        </Link>

                                    </div>}


                                {project.github !== "" &&
                                    <div  className=" px-3 py-2  text-xl hover:text-2xl">
                                        <Link href={project.github} target="_blank">
                                            <FaGithub/>
                                        </Link>

                                    </div>}


                            </div>
                            <p className="font-thin">{project.description}</p>
                            <div className="flex gap-2">
                                {project.technologies.map((technology, index) => (

                                    <div className="border rounded-md px-3 py-2 text-3xl border-neutral-800" key={index}>
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
                                                case 'typescript':
                                                    return <SiTypescript style={{ color: "#1572B6" }} />;
                                                case 'postgresql':
                                                    return <SiPostgresql style={{ color: "#1572B6" }} />;
                                                case 'sequelize':
                                                    return <SiSequelize style={{ color: "#1572B6" }} />;
                                                case 'jwt':
                                                    return <SiJsonwebtokens style={{ color: "#FB544E" }} />;
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