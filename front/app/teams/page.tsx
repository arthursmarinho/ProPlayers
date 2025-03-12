"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {getTeams, Team} from "../services/teamsService";
import Image from "next/image";

export default function PlayersPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (error) {
        console.error("Erro ao buscar times:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <main className="text-black">
        <div className="grid grid-cols-2 gap-4">
          {teams.map((teams) => (
            <div
              key={teams._id}
              className=" mt-6 border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={teams.image}
                  alt={teams.name} // Adicionando a descrição da imagem
                  width={400} // Largura da imagem
                  height={200} // Altura da imagem
                  className="object-scale-down rounded-lg"
                />
              </div>

              <h2 className="text-4xl font-bold mb-2">{teams.name}</h2>
              <p className="text-2xl mb-2"></p>
              <Link
                href={`/teams/${teams._id}`}
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
