import React from "react";
import { useRouter } from 'next/router'
import { Nav } from "@/components/Nav";
import { CourseExists } from "@/db/CourseExists";
import { NotFound } from "@/components/notFound";
export default function Page() {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <main>
        <Nav/>
        {CourseExists(id)?(
            <section></section>
        ):(
            <NotFound/>
        )}
    </main>
  )
}