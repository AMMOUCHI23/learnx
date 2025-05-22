'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteCategory({ id, name }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async () => {
    const confirmDelete = confirm(`Supprimer la catégorie "${name}" ?`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de la suppression');
      }

      router.refresh(); // Rafraîchir la liste
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="cursor-pointer px-4 py-1 rounded text-white bg-red-500 hover:bg-red-600"
      >
        Supprimer
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </>
  );
}
