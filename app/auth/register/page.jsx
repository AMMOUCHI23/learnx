"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password, nom, prenom }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/auth/login");
    } else {
      const error = await res.text();
      alert("Erreur lors de l'inscription : " + error);
    }
  };

  return (
   <section className=" text-gray-900 font-sans  flex items-center justify-center h-[95vh] ">
     <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto  bg-white p-6 rounded shadow "
    >
      <h1 className="text-xl  font-bold mb-4">Inscription</h1>

      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none"
        required
      />
      <input
        type="text"
        placeholder="Prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none"
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none"
        required
      />
      <input
        type="password"
        placeholder="Confirmation du mot de passe"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      >
        S'inscrire
      </button>
      <div className="text-right mt-4">
                Déjà un compte ? <Link href="/auth/login" className="text-indigo-600 underline" >Se connecter</Link>
            </div>
    </form>
      
   </section>
  );
}
