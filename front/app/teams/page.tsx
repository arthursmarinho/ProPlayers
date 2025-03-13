"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {getTeams, Team} from "../services/teamsService";
import Image from "next/image";

export default function PlayersPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (error) {
        console.error("Erro ao buscar jogadores:", error);
        setError("Erro ao buscar jogadores.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <p className="text-center mt-10">Carregando times...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <main className="text-black px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teams.map((team) => {
          // Sanitizando a URL da imagem, removendo espaços e corrigindo possíveis problemas
          const imageUrl = team.image
            ? encodeURI(team.image.trim())
            : "/placeholder.jpg";

          return (
            <div
              key={team._id}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-center mb-4">
                {/* Garantindo que a URL da imagem seja válida */}
                <Image
                  alt={`Imagem do time ${team.name}`}
                  src={imageUrl}
                  width={400}
                  height={200}
                  className="object-scale-down rounded-lg"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">
                {team.name}
              </h2>
              <div className="text-center">
                <Link
                  href={`/players/${team._id}`}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
