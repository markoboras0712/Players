import { createAsyncThunk } from '@reduxjs/toolkit';
import { client, Player } from 'store';

export const fetchPlayers = createAsyncThunk('fetchPlayers', async () => {
  try {
    const response = await client.getEntries({
      content_type: 'players',
      select:
        'sys.id,fields.name,fields.nickname,fields.totalEarnings,fields.countryFlag,fields.description,fields.id,fields.photo,fields.position',
    });
    const items = response.items as any;
    const allPlayers: Player[] = items.map((item: any) => ({
      nickname: item.fields.nickname,
      id: item.fields.id,
      position: item.fields.position,
      totalEarnings: item.fields.totalEarnings,
      name: item.fields.name,
      description: item.fields.description.content[0].content
        .map((desc: { value: any }) => desc.value)
        .join(),
      countryFlag: item.fields.countryFlag.fields.file.url,
      photo: item.fields.photo.fields.file.url,
    }));
    console.log('All players', allPlayers);
    return allPlayers;
  } catch (error) {
    console.log('fetch items error', error);
    throw new Error('did not fetch items');
  }
});

/** name: string;
  nickname: string;
  id: string;
  position: string;
  totalEarnings: number;
  items[2].fields.description.content[0].content
  description: string; // items[1].fields.description.content[0].content[0].value
  countryFlag?: string; // items[1].fields.countryFlag.fields.file.url
  photo?: string; // items[1].fields.photo.fields.file.url */
