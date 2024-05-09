import React from "react";
import { coursesOBJ } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { TagColor } from "@/db/tagsColors";

export function CourseCard({ course }: { course: coursesOBJ }) {
    return (
        <div className="w-[300px]">
            <Link href={course.url}>
                <div className="block bg-[#F7B787] rounded-lg transition-transform duration-100 hover:scale-110">
                    <Image src={course.thumbnail} alt="Thumbnail" className="rounded-t-lg" width={300} height={100} />
                    <div className="m-5">
                        <h2 className="text-lg text-center">{course.name}</h2>
                        <p className="text-center" dir="ltr">{course.about}</p>
                        <p>مواضيع:</p>
                        <p className={`bg-[${TagColor(course.tags[0])}] p-2 rounded`}>{course.tags[0]}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}