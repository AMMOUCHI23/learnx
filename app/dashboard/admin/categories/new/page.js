'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default   function AdminAddCategory() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [formHasError, setFormHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const route = useRouter();
  
    const handleChange = (e) => {
      if (e.target.name === 'name') {
        setName(e.target.value);
      } else if (e.target.name === 'slug') {
        setSlug(e.target.value);
      }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      

        if (!name || !slug) {
            setFormHasError(true);
            return;
        }

        setFormHasError(false);
        try{
            const res = await fetch('http://localhost:3000/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name,slug}),
            });
            if (res.ok) {
                route.push('/dashboard/admin/categories');
            } else {
                const err = await res.text();
                console.error('Erreur API:', err);
                setErrorMessage('Une erreur est survenue lors de l’ajout.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Erreur réseau ou serveur.');
        }
        }
        

  return (

    <div>
        <p>< Link href="/dashboard/admin/categories" className='cursor-pointer text-blue-600 hover:text-blue-800'> &lt; Retour</Link> </p>
      <div className="mx-auto mt-8 p-8 border-2 border-gray-300 shadow-md rounded-2xl max-w-[500px]">
     <h2 className='text-2xl font-bold text-center mb-4 capitalize'>Ajouter une categorie</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
        <input
          name="name"
          type="text"
          placeholder="Nom"
          className="p-2 outline-none border-2 border-gray-300"
          value={name}
          onChange={handleChange}
          
        />
       
          { formHasError && !name && (<p className="text-sm text-red-500">Ce champ est obligatoire</p>) }
  

        <input
          name="slug"
          type="text"
          placeholder="Slug"
          className="p-2 outline-none border-2 border-gray-300"
          value={slug}
          onChange={handleChange}
        />
        
      {formHasError && !slug && (<p className="text-sm text-red-500">Ce champ est obligatoire</p>)}
   

       

        <button
          type="submit"
          className="bg-gray-600 text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-gray-600 hover:cursor-pointer font-semibold"
        >
          Ajouter
        </button>

        
      </form>
    </div>
    </div>
    
  )
}
