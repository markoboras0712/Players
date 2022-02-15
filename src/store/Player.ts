export interface Player {
  name: string;
  nickname: string;
  earning: number;
  country: string;
  photo?: File;
}

export interface AllPlayers {
  allPlayers: Player[];
  loading: boolean;
  error: string | unknown;
}
