import { GET } from '@/app/api/courses/route';


export default async function AdminCoursesPage() {

  
   let res= await GET();
   let courses= await res.json();
   
    
   
   if (!courses) return <p>pas de courses</p>
     return (
       <div>
         <p className='mt-4 flex justify-end'><Link href="/dashboard/admin/courses/new" className='cursor-pointer px-4 py-2 rounded text-gray-100 bg-amber-400 hover:bg-amber-500'>Ajouter une categorie</Link></p>
         <h1 className='text-2xl font-bold mb-4'>Liste des courses</h1>
         <table className='table-fixed border w-full text-center '>
           <thead>
             <tr className='text-white font-semibold'>
               
               <th className='border border-black bg-black w-1/3 py-2'>Titre</th>
               <th className='border border-black bg-black w-1/3 py-2'>Description</th>
               <th className='border border-black bg-black w-1/3 py-2'>Prix</th>
               <th className='border border-black bg-black w-1/3 py-2'>Image</th>
               <th className='border border-black bg-black w-1/3 py-2'>Categorie</th>
               <th className='border border-black bg-black w-1/3 py-2'>Action</th>
             </tr>
           </thead>
          <tbody>
     {courses.map((course) => (
       <tr key={course.id} className="border border-black">
         <td className="border border-black">{course.title}</td>
         <td className="border border-black">{course.description}</td>
         <td className="border border-black">{course.price}</td>
         <td className="border border-black">{course.image}</td>
         <td className="border border-black">{course.categoryId}</td>
         <td className="border border-black py-3">
           <div className="flex justify-evenly">
             <Link
               href={`/dashboard/admin/courses/${course.id} /edit`}
               className="cursor-pointer px-4 py-1 rounded text-white bg-amber-500 hover:bg-amber-600"
             >
               Modifier
             </Link>
             <Deletecourse id={course.id} name={course.name} />
           </div>
         </td>
       </tr>
     ))}
   </tbody>
   
           
         </table>
       </div>
     
  )
}
