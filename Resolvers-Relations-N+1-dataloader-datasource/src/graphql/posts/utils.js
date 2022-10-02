import fetch from 'node-fetch';
import { config } from 'dotenv';

config();
const { API_URL } = process.env;
export const getPosts = (path = '') => fetch(`${API_URL}/posts/${path}`);
