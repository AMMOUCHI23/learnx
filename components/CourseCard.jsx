import React from 'react'


export default function CourseCard() {
  return (

    <div className='p-1 md:p-2 bg-fuchsia-50  w-[150px] md:w-[250px] shadow mr-4 mb-4 hover:border hover:border-indigo-600 '>
      <div>
      <img src="/cours_1.jpg" alt="cours1" className='w-full rounded object-cover' />
      </div>
      <div className="mt-2 space-y-1 text-xs md:text-sm text-gray-800">
        <p className="font-semibold text-base">Nom du cours</p>
        <p>Formateur : John Doe</p>
        <p>Durée : 2h30</p>
        <p>Prix : 19.99 €</p>
      </div>
    </div>
   
  )
}
