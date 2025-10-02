import {HERO_CONTENT} from "@/constant";
import Image from "next/image"



export default function Hero() {
    return (
        <div className="">
            <div className="flex flex-col-reverse flex-wrap md:flex-row px-4">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-8xl tracking-tight pb-16 font-thin ">Milkiyas Gebru</h1>
                        <span

                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Developer and Researcher</span>
                        <p

                            className="my-2 font-light tracking-tighter py-6 max-w-xl">{HERO_CONTENT}</p>

                        <a className="px-3 py-2 border border-neutral-800 rounded-md self-start bg-gradient-to-l from-gray-300 to-gray-500 text-neutral-800" href="/Milkiyas-Gebremichael-Gebru-Resume.pdf" download="MilkiyasGebruCV.pdf">Download Resume</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <Image

                            src="/Miki_Profile_Picture.jpg" alt="" width={500} height={500} className="max-w-80 rounded"/>
                    </div>
                </div>
            </div>
        </div>
    )
}