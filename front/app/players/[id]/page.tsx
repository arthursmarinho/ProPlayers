"use client";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation"; // Use useParams em vez de useRouter

type Player = {
  _id: string;
  name: string;
  age: number;
  image: string;
  team: string;
  history: string;
  sensi: string;
};

export default function PlayerDetailsPage() {
  const {id} = useParams(); // Usando useParams para pegar o parâmetro da URL

  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPlayer = async () => {
      try {
        const response = await fetch(
          `https://backend-tm62.onrender.com/proplayers/${id}`
        );
        if (!response.ok) throw new Error("Erro ao buscar jogador");
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error("Erro ao buscar jogador:", error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) return <p>Carregando...</p>;

  return (
    <main>
      <h1>{player.name}</h1>
      <img
        src={player.image}
        alt={player.name}
        style={{width: "200px", borderRadius: "8px"}}
      />
      <p>
        <strong>Idade:</strong> {player.age}
      </p>
      <p>
        <strong>Time:</strong> {player.team}
      </p>
      <p>
        <strong>Sensibilidade:</strong> {player.sensi}
      </p>
      <p>{player.history}</p>
    </main>
  );
}
