"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CourseForm({ course = null }) {
  const [title, setTitle] = useState(course?.title || "");
  const [description, setDescription] = useState(course?.description || "");
  const [price, setPrice] = useState(course?.price || 0);
  const [image, setImage] = useState(course?.image || "");
  const [categoryId, setCategoryId] = useState(course?.categoryId || "");

  const router = useRouter();
  const isEditing = !!course;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, description, price: parseFloat(price), image, categoryId };
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `/api/courses/${course.id}` : "/api/courses";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/dashboard/courses"); // rediriger vers liste
    } else {
      alert("Erreur lors de l'enregistrement du cours.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto mt-6 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold">
        {isEditing ? "Modifier le cours" : "Créer un nouveau cours"}
      </h1>

      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="ID de catégorie"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        {isEditing ? "Mettre à jour" : "Créer le cours"}
      </button>
    </form>
  );
}
