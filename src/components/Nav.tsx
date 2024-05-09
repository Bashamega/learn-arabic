import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
export function Nav(){
    return(
        <nav className=" rounded-t-none max-h-52 lg:rounded-t-lg shadow-lg w-nav w-screen fixed flex items-center justify-evenly lg:mt-[25px] lg:mx-[25px] p-2 backdrop-blur bg-[#F9E8D9] rounded-lg text-orange-500">
            <Logo/>
            <Link href="https://arabicgrammar.adambashaahmednaji.com/" className=" w-1/5">
                <button className="bg-[#F7B787] hover:bg-[#EE7214] text-[#527853] transition-colors p-2 duration-100 rounded-lg w-full">نحو</button>
            </Link>
        </nav>
    )
}