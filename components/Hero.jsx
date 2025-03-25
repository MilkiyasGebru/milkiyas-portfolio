import {HERO_CONTENT} from "@/index";
import Image from "next/image"

export default function Hero() {
    return (
        <div className="">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-8xl tracking-tight pb-16 font-thin ">Milkiyas Gebru</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
                        <p className="my-2 font-light tracking-tighter py-6 max-w-xl">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <Image src="/Miki_Profile_Picture.jpg" alt="" width={500} height={500} className="w-1/2 rounded"/>
                    </div>
                </div>
            </div>
        </div>
    )
}