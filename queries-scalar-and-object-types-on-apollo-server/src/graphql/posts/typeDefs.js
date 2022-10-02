import { gql } from 'apollo-server';

export const posts = gql`
extend type Query {
  post(id: ID): PostResult!
  posts(input: InputFields): [Post!]!
}

union PostResult = PostNotFoundError | Post

type PostNotFoundError {
  statusCode: Int!
  message: String!
}

type Post {
  id: ID!
  title: String!
  body: String!
  user: User!,
  indexRef: Int!,
  createdAt: String!
  timestamp: String!
}
`;
