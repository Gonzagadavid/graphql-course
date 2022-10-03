import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';

config();

const { API_URL } = process.env;

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/posts/`;
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams);
  }

  async getPost(id) {
    return this.get(id);
  }
}
