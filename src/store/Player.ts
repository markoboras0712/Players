export interface Player {
  name: string;
  nickname?: string;
  id?: string;
  position?: string;
  totalEarnings?: number;
  
  description?: string; // items[1].fields.description.content[0].content[0].value
  countryFlag?: string; // items[1].fields.countryFlag.fields.file.url
  photo?: string; // items[1].fields.photo.fields.file.url
}

export interface AllPlayers {
  allPlayers: Player[];
  loading: boolean;
  error: string | unknown;
}
