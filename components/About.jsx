import Image from "next/image"
import {ABOUT_TEXT} from "@/index";

export default function About() {

    return (
        <div className="border-b border-neutral-900 pb-4 px-4">
            <h1 className="text-4xl my-20 text-center mb-4">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-col md:flex-row items-start my-20 flex-wrap gap-1">
                <div className="w-full md:w-2/5 flex justify-center md:justify-start">
                    <Image src="/Miki_Profile_Picture.jpg" alt="Miki Profile Picture" height={350} width={350} className="border-red-800 rounded max-w-80"  />
                </div>
                <div className="w-full md:w-1/2 py-4 px-2">
                    <p className="font-light tracking-tighter max-w-xl">
                        {ABOUT_TEXT}
                    </p>
                </div>

            </div>
        </div>
    )
}