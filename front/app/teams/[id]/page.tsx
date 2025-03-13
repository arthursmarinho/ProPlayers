"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Image from "next/image";

type Team = {
  _id: string;
  name: string;
  birth: string;
  image: string;
  history: string;
};

export default function TeamDetailsPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchTeam = async () => {
      try {
        const response = await fetch(
          `https://backend-tm62.onrender.com/teams/${id}`
        );
        if (!response.ok) throw new Error("Erro ao buscar time");
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error("Erro ao buscar time:", error);
      }
    };

    fetchTeam();
  }, [id]);

  if (!team) return <p>Carregando...</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{team.name}</h1>

      <Image
        src={team.image.trim()} // Evita erro com espaço no final
        alt={team.name}
        width={400}
        height={200}
        className="rounded-lg object-cover"
      />

      <p className="mt-4">
        <strong>Fundado:</strong> {team.birth}
      </p>
      <p className="mt-2">{team.history}</p>
    </main>
  );
}
