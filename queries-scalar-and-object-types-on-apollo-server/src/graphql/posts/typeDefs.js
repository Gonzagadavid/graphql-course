import { gql } from 'apollo-server';

export const posts = gql`
extend type Query {
  post(id: ID): PostResult!
  posts(input: InputFields): [Post!]!
}

union PostResult = PostNotFoundError | PostTimeoutError  | Post

interface PostError {
  statusCode: Int!
  message: String!
}

type PostNotFoundError implements PostError{
  statusCode: Int!
  message: String!
  postId: String!
}

type PostTimeoutError implements PostError{
  statusCode: Int!
  message: String!
  time: String!
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
