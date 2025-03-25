import {EXPERIENCES} from "@/index";

export default function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
            <div className="flex flex-col gap-8">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="flex flex-col items-start md:items-start md:flex-row ">
                        <div className="w-1/3">
                            <p className="font-thin">{experience.year}</p>
                        </div>
                        <div className="w-4/5 md:w-1/2 flex flex-col gap-y-[10px]">
                            <div className="flex gap-2 font-semibold">
                                <p>{experience.role} -</p>
                                <p>{experience.company}</p>
                            </div>
                            <p className="text-neutral-400 ">{experience.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {experience.technologies.map((technology, index) => (
                                    <div className="border rounded-md px-3 py-2 bg-neutral-900" key={index}>
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