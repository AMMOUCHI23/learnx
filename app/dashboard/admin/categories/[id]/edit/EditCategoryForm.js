'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditCategoryForm({ category }) {
  const [name, setName] = useState(category.name || '');
  const [slug, setSlug] = useState(category.slug || '');
  const [formHasError, setFormHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!name || !slug) {
    setFormHasError(true);
    return;
  }

  const res = await fetch(`/api/categories/${category.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, slug }),
  });

  if (res.ok) {
    router.push('/dashboard/admin/categories');
  } else {
    const err = await res.json(); // ✅ important
    console.error('Erreur API:', err);
    setErrorMessage(err.error || 'Une erreur est survenue lors de la modification.');
  }
};


  return (
    <div className="mx-auto mt-8 p-8 border-2 border-gray-300 shadow-md rounded-2xl max-w-[500px]">
      <h2 className="text-2xl font-bold text-center mb-4 capitalize">Modifier une catégorie</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          className="p-2 outline-none border-2 border-gray-300"
        />
        {formHasError && !name && <p className="text-sm text-red-500">Ce champ est obligatoire</p>}

        <input
          name="slug"
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug"
          className="p-2 outline-none border-2 border-gray-300"
        />
        {formHasError && !slug && <p className="text-sm text-red-500">Ce champ est obligatoire</p>}

        <button
          type="submit"
          className="bg-gray-600 text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-gray-600 hover:cursor-pointer font-semibold"
        >
          Modifier
        </button>

        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      </form>
    </div>
  );
}
