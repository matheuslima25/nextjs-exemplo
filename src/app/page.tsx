import Link from "next/link";

export default function Home() {
  // Como este é um Server Component, este log aparecerá no TERMINAL do servidor,
  // e NÃO no console do navegador. Isso é para demonstrar a execução no server.
  console.log("Renderizando a Home Page no Servidor...");

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Bem-vindo à Demo de Next.js 14+
      </h2>
      
      <p className="text-gray-600 max-w-2xl text-center mb-10">
        Esta aplicação demonstra as principais estratégias de renderização e arquitetura 
        do Next.js moderno. Selecione um módulo abaixo para ver a teoria em prática.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Card 1: SSG */}
        <Link href="/ssg-blog" className="group">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white h-full">
            <h3 className="text-xl font-semibold text-blue-700 mb-2 group-hover:underline">
              1. SSG (Static Site Generation)
            </h3>
            <p className="text-gray-500 text-sm">
              Páginas geradas no <strong>build time</strong>. Ideais para blogs, documentação e marketing.
              Dados buscados uma única vez.
            </p>
          </div>
        </Link>

        {/* Card 2: SSR */}
        <Link href="/ssr-users" className="group">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white h-full">
            <h3 className="text-xl font-semibold text-green-700 mb-2 group-hover:underline">
              2. SSR (Server-Side Rendering)
            </h3>
            <p className="text-gray-500 text-sm">
              Páginas geradas a cada <strong>request</strong>. Ideais para dashboards e dados dinâmicos em tempo real.
            </p>
          </div>
        </Link>

        {/* Card 3: Client Components */}
        <Link href="/client-counter" className="group">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white h-full">
            <h3 className="text-xl font-semibold text-purple-700 mb-2 group-hover:underline">
              3. Client Components
            </h3>
            <p className="text-gray-500 text-sm">
              Interatividade no navegador (useState, useEffect). Onde a mágica do React tradicional acontece.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}