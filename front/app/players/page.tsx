"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {getPlayers, Player} from "../services/proplayerService";
import Image from "next/image";

export default function PlayersPage() {
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
    <>
      <main className="text-black">
        <div className="grid grid-cols-2 gap-4">
          {players.map((player) => (
            <div
              key={player._id}
              className=" border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Image
                alt={player.name}
                src={player.image.trim()}
                className="w-full h-48 object-scale-down rounded-lg mb-4 flex justify-center"
                width={400}
                height={200}
              />
              <h2 className="text-4xl font-bold mb-2">{player.name}</h2>
              <p className="text-2xl">
                <strong className="text-blue-500">Age:</strong> {player.age}
              </p>
              <p className="text-2xl mb-2">
                <strong className="text-blue-500">Team:</strong> {player.team}
              </p>
              <Link
                href={`/players/${player._id}`}
                className="text-blue-500 underline hover:text-blue-700"
              >
                More Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
