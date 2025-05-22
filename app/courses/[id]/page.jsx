import prisma from '@/lib/prisma';
import React from 'react'

export default async function detailsCourse({params}) {
try {
    const course = await prisma.category.findUnique({
        where: { id: params.id },
        include: { creator: true, category: true },
    });
    if (!course) return <p>Course introuvable</p>;
} catch (error) {
    console.error(error);
}
  return (
    <div>
      
    </div>
  )
}
