export type BetEntity = {
  id: number;
  user_id: number;
  team1_score: number;
  team2_score: number;
  status: boolean | null;
  cancelled: boolean;
};

export type Bet = Omit<BetEntity, "id" | "user_id" | "status" | "cancelled">;
