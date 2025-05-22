"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) router.push("/dashboard");
    else alert("Échec de la connexion");
  };

  return (
    <section className="text-gray-900 font-sans  flex items-center justify-center h-[95vh] ">
      <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto  bg-white p-6 rounded shadow ">
      <h1 className="text-xl font-bold">Connexion</h1>
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
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
        Se connecter
      </button>
      <div  className="text-right mt-4"> Pas encore de compte ? <Link href="/auth/register" className="text-indigo-600 underline">Créez-le</Link></div>
    </form>
    
    </section>
  );
}
