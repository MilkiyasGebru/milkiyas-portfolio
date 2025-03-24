import Image from "next/image"
import logo from "@/public/MikiLogo.png"

import {FaLinkedin} from "react-icons/fa"
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="mb-10 flex items-center justify-between py-3 px-3 ">
            <div className="flex items-center">
                <p className="font-semibold text-xl">MG</p>
            </div>
            <div className="flex p-1 gap-4 text-2xl">
                <FaGithub />
                <FaLinkedin />
            </div>
        </nav>
    )
}