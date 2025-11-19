import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";

// 1. Otimização de Fontes (recurso nativo do Next.js)
const inter = Inter({ subsets: ["latin"] });

// 2. Metadata API: Controle de SEO dinâmico ou estático
export const metadata: Metadata = {
  title: "Aula 09 - Next.js Demo",
  description: "Aplicação didática para demonstrar SSR, SSG e Roteamento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Barra de Navegação Global - Persiste entre navegações */}
        <header className="bg-blue-900 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Next.js Architect</h1>
            <nav className="flex gap-4">
              {/* Uso do componente Link para SPA Navigation (sem refresh) */}
              <Link href="/" className="hover:text-blue-300 transition">Home</Link>
              <Link href="/ssg-blog" className="hover:text-blue-300 transition">SSG (Blog)</Link>
              <Link href="/ssr-users" className="hover:text-blue-300 transition">SSR (Users)</Link>
              <Link href="/client-counter" className="hover:text-blue-300 transition">Client Comp.</Link>
            </nav>
          </div>
        </header>

        {/* Onde o conteúdo das páginas será injetado */}
        <main className="max-w-5xl mx-auto p-8 min-h-screen">
          <Providers>
            {children}
          </Providers>
        </main>

        <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
          <p>© 2025 - Aula de Desenvolvimento Web Moderno</p>
        </footer>
      </body>
    </html>
  );
}