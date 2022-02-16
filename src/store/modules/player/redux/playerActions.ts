import { createAsyncThunk } from '@reduxjs/toolkit';
import { Player } from 'store';
import { client } from 'store/client';

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
    return allPlayers;
  } catch (error) {
    console.log('fetch items error', error);
    throw new Error('did not fetch items');
  }
});
