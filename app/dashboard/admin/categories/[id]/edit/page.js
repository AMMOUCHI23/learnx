// app/dashboard/admin/categories/[id]/edit/page.js
import EditCategoryForm from './EditCategoryForm';

export default async function AdminEditCategoryPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/categories/${params.id}`, {
    cache: 'no-store' 
  });

  if (!res.ok) throw new Error('Erreur lors du chargement de la catégorie');

  const category = await res.json();
   console.log(category);
  return <EditCategoryForm category={category} />;
}
