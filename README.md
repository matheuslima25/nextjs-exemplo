# Aula 09 - Next.js 14+ (App Router & Estratégias de Renderização)

Este projeto é uma demonstração prática das capacidades do **Next.js 14+** utilizando o **App Router**. Ele exemplifica as diferenças fundamentais entre renderização estática (SSG), renderização no servidor (SSR) e interatividade no cliente (Client Components).

## 🛠️ Tecnologias Utilizadas

* **Next.js 14+** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **HeroUI** (Componentes de UI Modernos)

-----

## 🚀 Como Rodar o Projeto

### 1\. Instalação

Primeiro, instale as dependências do projeto. Certifique-se de ter o Node.js (v18+) instalado.

```bash
npm install
# Instalação das dependências de UI (HeroUI + Framer Motion)
npm install @heroui/react framer-motion
```

### 2\. Ambiente de Desenvolvimento

Para rodar o servidor local com *Hot Reloading*:

```bash
npm run dev
```

Acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

### 3\. Simulação de Produção (Importante para testar SSG)

O comportamento de Cache/SSG é diferente em modo de desenvolvimento. Para ver o SSG real (páginas estáticas congeladas):

```bash
npm run build
npm start
```

-----

## 📚 Conceitos Abordados

### 1\. SSG (Static Site Generation) - `/ssg-blog`

* **Conceito:** O HTML é gerado **uma única vez** durante o comando `npm run build`.
* **Código:** `fetch` padrão (com cache).
* **Prova Real:** Observe o "Carimbo de Tempo" na página. Em produção, ele **não muda** mesmo que você atualize a página (F5), pois o HTML foi "congelado" no momento da construção.

### 2\. SSR (Server-Side Rendering) - `/ssr-users`

* **Conceito:** O HTML é gerado pelo servidor **a cada requisição**.
* **Código:** `fetch(url, { cache: 'no-store' })`.
* **Prova Real:** O "Carimbo de Tempo" muda a cada atualização da página, e os dados são buscados novamente na API externa.

### 3\. Client Components - `/client-counter`

* **Conceito:** Componentes que permitem interatividade (cliques, estado local, `useEffect`).
* **Código:** Uso da diretiva `'use client'` no topo do arquivo.
* **Nota:** Eles ainda são pré-renderizados no servidor (HTML inicial) e depois "hidratados" no navegador para se tornarem interativos.

### 4\. Loading UI & Streaming

* **Conceito:** Feedback visual instantâneo enquanto o servidor processa dados demorados (SSR).
* **Arquivo:** `loading.tsx`.
* **UI:** Utilizamos o componente `Spinner` do **HeroUI**.

### 5\. Arquitetura de Providers

* **Desafio:** O `layout.tsx` é um Server Component e não pode usar Context API diretamente.
* **Solução:** Criamos um componente `providers.tsx` (Client Component) para envolver a aplicação com o `HeroUIProvider`, permitindo o uso da biblioteca de UI em toda a aplicação.

-----

## 📂 Estrutura de Pastas (App Router)

```text
src/
└── app/
    ├── layout.tsx        # Layout Global (Server Component)
    ├── page.tsx          # Home Page (Menu)
    ├── loading.tsx       # UI de Carregamento Global (HeroUI Spinner)
    ├── providers.tsx     # Wrapper para Contextos (HeroUI)
    ├── ssg-blog/         # Rota para exemplo SSG
    │   └── page.tsx
    ├── ssr-users/        # Rota para exemplo SSR
    │   └── page.tsx
    └── client-counter/   # Rota para exemplo Client Component
        └── page.tsx
```
