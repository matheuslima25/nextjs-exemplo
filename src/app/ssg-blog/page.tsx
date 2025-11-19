import Link from "next/link";

// Tipo para os dados do nosso post simulado
type Post = {
  id: number;
  title: string;
  content: string;
};

// 1. Função de busca de dados
// No Next.js, o 'fetch' é estendido. Por padrão, ele faz cache (force-cache).
// Isso significa que essa função roda no BUILD time, não no request time (em produção).
async function getPosts(): Promise<Post[]> {
  // Simulando um delay de banco de dados ou API externa
  // Em uma página SSG, esse delay só afeta o tempo de BUILD, não o usuário final!
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    { id: 1, title: "O que é SSG?", content: "SSG gera HTML no build..." },
    { id: 2, title: "Vantagens do Next.js", content: "Performance e SEO..." },
    { id: 3, title: "React Server Components", content: "Menos JS no cliente..." },
  ];
}

export default async function SSGBlogPage() {
  // Iniciamos a busca de dados
  const posts = await getPosts();
  
  // Captura o momento exato da renderização
  const timeGenerated = new Date().toLocaleTimeString('pt-BR');

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Blog (SSG)</h1>
        <p className="text-blue-600">
          Esta página é <strong>Estática</strong>. O servidor gerou este HTML uma única vez.
        </p>
        <div className="mt-4 p-3 bg-white rounded border border-blue-200 inline-block">
          <span className="text-gray-500 text-sm uppercase font-bold">Gerado às:</span>
          <span className="ml-2 text-xl font-mono text-red-600 font-bold">
            {timeGenerated}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          * Em modo de desenvolvimento (`npm run dev`), o Next.js regenera a cada refresh. 
          Para ver o efeito SSG real, faça `npm run build` e `npm start`.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.id} className="p-6 bg-white shadow rounded-lg hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.content}</p>
            {/* Link simulado para um detalhe do post */}
            <button className="text-blue-500 text-sm mt-4 hover:underline">
              Ler mais &rarr;
            </button>
          </article>
        ))}
      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-gray-500 hover:text-gray-900 underline">
          &larr; Voltar para Home
        </Link>
      </div>
    </div>
  );
}