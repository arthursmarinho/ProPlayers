"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation"; // Use useParams em vez de useRouter

type Team = {
  _id: string;
  name: string;
  birth: string;
  image: string;
  history: string;
};

export default function TeamDetailsPage() {
  const {id} = useParams(); // Usando useParams para pegar o parâmetro da URL

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
    <main>
      <h1>{team.name}</h1>
      <img src={team.image} style={{width: "200px", borderRadius: "8px"}} />
      <p>
        <strong>Birth:</strong> {team.birth}
      </p>
      <p>{team.history}</p>
    </main>
  );
}
