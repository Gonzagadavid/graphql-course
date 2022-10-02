import { gql } from 'apollo-server';

export const posts = gql`
extend type Query {
  post(id: ID): Post!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  body: String!
  user: User!,
  indexRef: Int!,
  createdAt: String!
}
`;
