"use client"

import {HERO_CONTENT} from "@/constant";
import Image from "next/image"
import {motion} from "framer-motion";

const framer_container = (delay,x)=>({
    hidden: {
        x:x,
        opacity: 0,
    },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})


export default function Hero() {
    return (
        <div className="">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={framer_container(0,-100)}
                                   initial="hidden"
                                   animate="visible"
                                   className="text-8xl tracking-tight pb-16 font-thin ">Milkiyas Gebru</motion.h1>
                        <motion.span
                            variants={framer_container(0.25,-100)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p
                            variants={framer_container(0.5,-100)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 font-light tracking-tighter py-6 max-w-xl">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            variants={framer_container(0.7, 100)}
                            initial="hidden"
                            animate="visible"
                            src="/Miki_Profile_Picture.jpg" alt="" width={500} height={500} className="max-w-80 rounded"/>
                    </div>
                </div>
            </div>
        </div>
    )
}