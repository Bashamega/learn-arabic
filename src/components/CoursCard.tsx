import React from "react";
import { coursesOBJ } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { TagColor } from "@/db/tagsColors";

export function CourseCard({ course }: { course: coursesOBJ }) {
    return (
        <div className="w-[300px]">
            <Link href={course.url}>
                <div className="pb-5 block bg-[#F7B787] rounded-lg transition-transform duration-100 hover:scale-110  hover:shadow-lg">
                    <Image src={course.thumbnail} alt="Thumbnail" className="rounded-t-lg" width={300} height={100} />
                    <div className="m-5">
                        <h2 className="text-lg text-center">{course.name}</h2>
                        <p className="text-center" dir="ltr">{course.about}</p>
                        <p>مواضيع:</p>
                        <div className="p-2 rounded-full w-[100px] flex items-center justify-center" style={{ background: TagColor(course.tags[0]) }}>
                            {course.tags[0]}<Image src={"./tagIcon.svg"} className="mr-1" height={0} alt="Tag Icon" width={20}></Image>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}