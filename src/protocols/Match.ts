export type MatchEntity = {
  id: number;
  team1: string;
  team2: string;
  status: boolean;
};

export type Match = Omit<MatchEntity, "id" | "status">;
