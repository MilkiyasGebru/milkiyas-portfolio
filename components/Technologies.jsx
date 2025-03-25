"use client"

import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {BiLogoMongodb} from "react-icons/bi";
import {BiLogoNodejs} from "react-icons/bi";
import {DiPython} from "react-icons/di";
import {BiLogoPostgresql} from "react-icons/bi";
import {BiLogoGoLang} from "react-icons/bi";
import {SiSelenium} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {motion} from "framer-motion";

const icon_variants = (duration)=>({
    initial :{y:-10},
    animate:{
        y:[20,-10],
        transition:{
            duration:duration,
            repeat: Infinity,
            repeatType:"reverse",
            ease: "linear"
        }
    }

})

export default function Technologies() {

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={icon_variants(2)}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(1.5)}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-yellow-200"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(2)}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoNodejs className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(1.5)}
                    initial="hidden"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoMongodb className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(2)}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl "/>
                </motion.div>
                <motion.div
                    variants={icon_variants(1.5)}
                    initial="hidden"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(2)}
                    initial="hidden"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoGoLang className="text-7xl text-[#0064a5]"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(1.5)}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-gray-400"/>
                </motion.div>
                <motion.div
                    variants={icon_variants(2)}
                    initial="hidden"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSelenium className="text-7xl text-green-300"/>
                </motion.div>

            </div>
        </div>
    )
}