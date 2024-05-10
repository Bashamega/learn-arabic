import { coursesOBJ } from "@/types";

const courses:coursesOBJ[] = require("@/db/courses.json")
export function CourseExists(id:number){
    for (let i=0; i < courses.length; i++) {
        if (courses[i].id == id)
            return true;
    }
    return false;
}