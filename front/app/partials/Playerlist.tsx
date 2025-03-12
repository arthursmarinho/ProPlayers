"use client";

import {useEffect, useState} from "react";
import {getPlayers, Player} from "../services/proplayerService"; // 🔥 aqui tá o import!
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers();
        setPlayers(data);
      } catch (error) {
        console.error("Erro ao buscar jogadores:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <main className="text-black">
      <h1>Jogadores Profissionais</h1>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {players.map((player) => (
          <div
            key={player._id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <Image
              src={player.image}
              alt={player.name}
              style={{width: "100%", borderRadius: "8px"}}
            />
            <h2>{player.name}</h2>
            <p>
              <strong>Idade:</strong> {player.age}
            </p>
            <p>
              <strong>Time:</strong> {player.team}
            </p>
            <Link href={`/proplayers/${player._id}`}>
              <u>Ver detalhes</u>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
