export type UserEntity = {
  id: number;
  name: string;
};

export type User = Omit<UserEntity, "id">;

export type RankedUser = { id: number; name: string; correct_bets: number };
