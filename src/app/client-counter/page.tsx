'use client'; // 1. A DIRETIVA MÁGICA: Define que daqui para baixo é "Client Side"

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ClientCounterPage() {
  // Hooks do React só funcionam em Client Components
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // useEffect roda estritamente no navegador após a renderização
  useEffect(() => {
    setMounted(true);
    console.log("Client Component montado no navegador!");
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Contador (Client Component)</h1>
        <p className="text-purple-700 mb-4">
          Esta página usa <strong>&apos;use client&apos;</strong>. Ela permite interatividade, 
          hooks (useState, useEffect) e eventos de clique.
        </p>

        {/* Área Interativa */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-sm mx-auto">
          <span className="text-gray-500 text-xs uppercase font-bold mb-2">Estado Local</span>
          <div className="text-6xl font-bold text-purple-600 mb-6">
            {count}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition"
            >
              - Diminuir
            </button>
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition shadow-lg"
            >
              + Aumentar
            </button>
          </div>
        </div>

        {/* Prova de Hidratação */}
        <div className="mt-6 text-center text-sm text-gray-500">
            Status de Hidratação: {mounted ? "✅ Hidratado (Interativo)" : "⏳ Carregando HTML..."}
        </div>

      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-gray-500 hover:text-gray-900 underline">
          &larr; Voltar para Home
        </Link>
      </div>
    </div>
  );
}