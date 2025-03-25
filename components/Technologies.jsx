import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {BiLogoMongodb} from "react-icons/bi";
import {BiLogoNodejs} from "react-icons/bi";
import {DiPython} from "react-icons/di";
import {BiLogoPostgresql} from "react-icons/bi";
import {BiLogoGoLang} from "react-icons/bi";
import {SiSelenium} from "react-icons/si";

export default function Technologies() {

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-yellow-200"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoNodejs className="text-7xl text-green-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoMongodb className="text-7xl text-green-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoGoLang className="text-7xl text-[#0064a5]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSelenium className="text-7xl text-green-300"/>
                </div>
            </div>
        </div>
    )
}