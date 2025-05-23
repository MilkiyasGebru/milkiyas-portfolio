import {EXPERIENCES} from "@/constant";

export default function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4 px-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
            <div className="flex flex-col gap-8">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="flex flex-col items-end  md:items-start md:flex-row  ">
                        <div className="w-5/6 md:w-1/3 self-start md:px-8">
                            <p className="font-thin">{experience.year}</p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-y-[10px] self-start">
                            <p>{experience.role} - {experience.company}</p>

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