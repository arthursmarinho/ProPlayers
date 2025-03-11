import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/mensagem");
  return res.text();
}
