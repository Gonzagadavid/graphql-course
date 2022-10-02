import { gql } from 'apollo-server';

export const posts = gql`
extend type Query {
  post: Post!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  body: String!
}
`;
