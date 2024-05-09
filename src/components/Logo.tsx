import Link from "next/link";
import React from "react";
export function Logo() {
    return (
        <Link href={"/"}>
            <div className=" flex backdrop-blur-xl bg-black p-2 rounded-lg bg-opacity-0 hover:bg-opacity-5 transition-colors duration-100">
                <h1 className=" text-2xl">تعلم اللغة العربية</h1>
                <span className="text-green-500 border border-green-500 p-2 rounded mr-2">تجريبي</span>
            </div>
        </Link>
    )
}