export type Team = {
  _id: string;
  name: string;
  birth: number;
  image: string;
  history: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getTeams = async (): Promise<Team[]> => {
  const response = await fetch(`${API_BASE_URL}/teams`);
  if (!response.ok) throw new Error("Erro ao buscar times");
  return response.json();
};
