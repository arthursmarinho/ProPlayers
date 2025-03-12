export type Team = {
  _id: string;
  name: string;
  birth: number;
  image: string;
  history: string;
};

export const getTeams = async (): Promise<Team[]> => {
  const response = await fetch("http://localhost:3000/teams");
  if (!response.ok) throw new Error("Erro ao buscar times");
  return response.json();
};
