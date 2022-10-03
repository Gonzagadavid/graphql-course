import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';
import { makePostsDataLoader } from './dataLoader.js';
import { createPostFn } from './utils/posts-repository.js';

config();

const { API_URL } = process.env;

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${API_URL}/posts/`;
    this.dataLoader = makePostsDataLoader(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cache: { ttl: 60 },
    });
  }

  async getPost(id) {
    return this.get(id, null, {
      cache: { ttl: 60 },
    });
  }

  async createPost(postData) {
    return createPostFn(postData, this);
  }

  batchLoadByUserId(id) {
    return this.dataLoader.load(id);
  }
}
