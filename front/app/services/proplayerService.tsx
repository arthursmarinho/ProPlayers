export type Player = {
  _id: string;
  name: string;
  age: number;
  image: string;
  team: string;
  history: string;
  sensi: string;
};

export const getPlayers = async (): Promise<Player[]> => {
  const response = await fetch("http://localhost:3000/proplayers");
  if (!response.ok) throw new Error("Erro ao buscar jogadores");
  return response.json();
};
