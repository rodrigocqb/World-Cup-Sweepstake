export type Bet = {
  id?: number;
  user_id?: number;
  team1_score: number;
  team2_score: number;
  status?: boolean | null;
  cancelled?: boolean;
};
