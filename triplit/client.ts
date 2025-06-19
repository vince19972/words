import { TriplitClient } from '@triplit/client';
import { schema } from './schema';

const SERVER_URL = process.env.EXPO_PUBLIC_TRIPLIT_SERVER_URL;
const TOKEN = process.env.EXPO_PUBLIC_TRIPLIT_TOKEN;

export const triplit = new TriplitClient({
  logLevel: 'debug',
  schema,
  serverUrl: SERVER_URL,
  token: TOKEN,
});