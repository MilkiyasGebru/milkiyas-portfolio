import {PROJECTS} from "@/index";
import Image from "next/image"

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
                                    <div className="border rounded-md px-3 py-2" key={index}>
                                        {technology}
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