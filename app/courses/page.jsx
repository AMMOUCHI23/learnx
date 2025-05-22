import CourseCard from '@/components/CourseCard'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
     <div className=" mt-20 w-full text-xs md:text-sm" >
      <div className="flex justify-between items-center mb-6 mx-4">
        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Retour 
        </Link>
        <Link
          href="/dashboard/courses/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Ajouter un cours
        </Link>
      </div>
    <div className='flex flex-wrap justify-center '>
        
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
     
    </div>
     </div>
  )
}
