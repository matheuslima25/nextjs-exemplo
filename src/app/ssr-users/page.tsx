import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

// 1. Função de busca de dados Dinâmica
async function getUsers(): Promise<User[]> {
  // A URL abaixo é uma API pública de teste.
  // A flag { cache: 'no-store' } é o segredo do SSR no App Router.
  // Ela diz: "Nunca guarde isso. Vá buscar dados novos toda vez que alguém pedir."
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', 
  });

  // Simulando um pequeno delay de rede para dar para perceber o carregamento
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!res.ok) {
    throw new Error('Falha ao buscar usuários');
  }

  return res.json();
}

export default async function SSRUsersPage() {
  const users = await getUsers();
  
  // Este horário mudará a CADA refresh, provando que o servidor
  // está remontando a página na hora da requisição.
  const timeGenerated = new Date().toLocaleTimeString('pt-BR');

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Usuários (SSR)</h1>
        <p className="text-green-700">
          Esta página é <strong>Dinâmica</strong>. O servidor gera este HTML a cada request.
        </p>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="p-3 bg-white rounded border border-green-200 shadow-sm">
            <span className="text-gray-500 text-sm uppercase font-bold block">Renderizado às:</span>
            <span className="text-xl font-mono text-green-600 font-bold">
              {timeGenerated}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 max-w-md">
            &larr; Dê Refresh (F5). Observe que o horário atualiza e os dados são revalidados, 
            diferente da página de Blog (SSG).
          </p>
        </div>
      </div>

      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-gray-500 hover:text-gray-900 underline">
          &larr; Voltar para Home
        </Link>
      </div>
    </div>
  );
}