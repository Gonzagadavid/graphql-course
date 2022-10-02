import fetch from 'node-fetch';
import { config } from 'dotenv';

config();
const { API_URL } = process.env;
export const getUsers = (path = '') => fetch(`${API_URL}/users/${path}`);
