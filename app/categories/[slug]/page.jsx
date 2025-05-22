import { prisma } from '@/lib/prisma';

export default async function CategoryPage({ params }) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: { courses: true },
  });

  if (!category) return <p>Catégorie introuvable</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{category.name}</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {category.courses.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            {/* affiche plus d'infos ici */}
          </div>
        ))}
      </div>
    </div>
  );
}
