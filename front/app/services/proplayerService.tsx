export type Player = {
  _id: string;
  name: string;
  age: number;
  image: string;
  team: string;
  history: string;
  sensi: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPlayers = async (): Promise<Player[]> => {
  const response = await fetch(`${API_BASE_URL}/proplayers`);
  if (!response.ok) throw new Error("Erro ao buscar jogadores");
  return response.json();
};
