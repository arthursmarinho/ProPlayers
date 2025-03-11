// app/page.tsx
"use client"; // necessário apenas se você for usar interatividade com hooks — aqui não é obrigatório

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <p className="mt-4 text-lg">
          Get started by editing <code>app/page.tsx</code>
        </p>

        <Link href="/home" className="text-blue-500 underline mt-8 block">
          Go to Home
        </Link>
      </div>
    </main>
  );
}
