import React, { useState } from "react";
import { coursesOBJ } from "@/types";
import { CourseCard } from "./CoursCard";
const courseobj: coursesOBJ[] = require("@/db/courses.json");

export function CoursesList() {
    const [courses, setCourses] = useState<coursesOBJ[]>(courseobj);
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Function to handle changes in the search input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Filter courses based on the search query
    const filteredCourses: coursesOBJ[] = courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="pt-[208px] lg:mx-[25px] flex items-center justify-center flex-col">
            <input
                type="text"
                placeholder="ابحث"
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 border border-gray-300 rounded-md my-5 w-1/2 mx-8"
            />
            <section className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-4">
            {filteredCourses.map(element => (
                <CourseCard key={element.id} course={element} />
            ))}
            
        </section>
        </main>
    );
}
