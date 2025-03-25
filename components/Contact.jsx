import {CONTACT} from "@/constant";
import Link from "next/link";

export default function Contact() {

    return (
        <div className="border-b border-neutral-900 pb-10">

            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter">
                <p className="mt-4">{CONTACT.address}</p>
                <p className="mt-4">{CONTACT.phoneNo}</p>
                <Link href="mailto:milkiyasgebru@gmail.com" className="border-b">{CONTACT.email}</Link>
            </div>

        </div>
    )
}