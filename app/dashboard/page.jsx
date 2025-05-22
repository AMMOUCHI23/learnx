import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { LuBookOpen } from 'react-icons/lu';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="grid grid-rows-[auto_1fr] md:grid-cols-4 md:grid-rows-1 mt-10 w-full min-h-screen ">

      {/* Barre de navigation : en haut sur mobile, à gauche sur md+ */}
      <nav className="bg-gray-900 text-yellow-500 p-4  md:col-span-1 md:row-span-full text-sm md:text-xl">
        <ul className="flex flex-row justify-around md:mt-2 md:fixed   md:flex-col md:space-y-4">
        <Link href="/dashboard/admin/categories">
  <li className="flex items-center gap-2 font-semibold cursor-pointer hover:text-white">
    <BiCategory />
    Catégories
  </li>
</Link>
          <li className="flex items-center gap-2 font-semibold cursor-pointer hover:text-white">
            <LuBookOpen /> Cours
          </li>
          <li className="flex items-center gap-2 font-semibold cursor-pointer hover:text-white">
            <FaChalkboardTeacher /> Formateurs
          </li>
          <li className="flex items-center gap-2 font-semibold cursor-pointer hover:text-white">
            <FaUserGraduate /> Étudiants
          </li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <section className="bg-amber-100 p-6 row-start-2 md:col-span-3 md:row-span-full">
        <h1 className="text-xl font-bold mb-4">Dashboard Admin</h1>
        <p>Bienvenue dans le tableau de bord administrateur !</p>
      </section>

    </div>
  );
}
