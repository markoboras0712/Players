import * as contentful from 'contentful';

const config = {
  space: 'ojpqlra32uom',
  environment: 'master',
  accessToken: 'wO9AhZ3Ig3-aFGAJ3SEj1vtKJ6DuYhvnwDHTJfsQX5w',
};
export const client = contentful.createClient(config);
