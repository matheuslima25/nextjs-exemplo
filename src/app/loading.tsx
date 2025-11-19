'use client'

import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      {/* Componente visual do HeroUI */}
      <Spinner size="lg" color="primary" label="Carregando dados do servidor..." />
      
      <p className="text-gray-400 text-sm animate-pulse">
        (Este é o arquivo <code>loading.tsx</code> em ação via React Suspense)
      </p>
    </div>
  );
}