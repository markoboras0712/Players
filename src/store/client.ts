import * as contentful from 'contentful';

const config = {
  space: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
  environment: 'master',
  accessToken: 'wO9AhZ3Ig3-aFGAJ3SEj1vtKJ6DuYhvnwDHTJfsQX5w',
};

export const client = contentful.createClient(config);
