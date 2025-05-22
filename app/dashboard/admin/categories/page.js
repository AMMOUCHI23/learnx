
import { GET } from '@/app/api/categories/route';
import Link from 'next/link';
import DeleteCategory from './DeleteCategory';

export default async function AdminCategoriesPage() {
let res= await GET();
let categories= await res.json();

 

if (!categories) return <p>pas de categories</p>
  return (
    <div>
      <p className='mt-4 flex justify-end'><Link href="/dashboard/admin/categories/new" className='cursor-pointer px-4 py-2 rounded text-gray-100 bg-amber-400 hover:bg-amber-500'>Ajouter une categorie</Link></p>
      <h1 className='text-2xl font-bold mb-4'>Liste des categories</h1>
      <table className='table-fixed border w-full text-center '>
        <thead>
          <tr className='text-white font-semibold'>
            
            <th className='border border-black bg-black w-1/3 py-2'>Nom</th>
            <th className='border border-black bg-black w-1/3 py-2'>Slug</th>
            <th className='border border-black bg-black w-1/3 py-2'>Action</th>
          </tr>
        </thead>
       <tbody>
  {categories.map((category) => (
    <tr key={category.id} className="border border-black">
      <td className="border border-black">{category.name}</td>
      <td className="border border-black">{category.slug}</td>
      <td className="border border-black py-3">
        <div className="flex justify-evenly">
          <Link
            href={`/dashboard/admin/categories/${category.id} /edit`}
            className="cursor-pointer px-4 py-1 rounded text-white bg-amber-500 hover:bg-amber-600"
          >
            Modifier
          </Link>
          <DeleteCategory id={category.id} name={category.name} />
        </div>
      </td>
    </tr>
  ))}
</tbody>

        
      </table>
    </div>
  )
}
