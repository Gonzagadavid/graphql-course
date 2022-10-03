import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';
import { makeUserDataLoader } from './dataLoader.js';

config();

const { API_URL } = process.env;

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/users/`;
    this.dataLoader = makeUserDataLoader(this.getUsers.bind(this));
  }

  async getUsers(urlParams = {}) {
    return this.get('', urlParams, {
      cache: { ttl: 60 },
    });
  }

  async getUser(id) {
    return this.get(id, null, {
      cache: { ttl: 60 },
    });
  }

  batchLoadByPostId(id) {
    return this.dataLoader.load(id);
  }
}
