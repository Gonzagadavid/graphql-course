import { gql } from 'apollo-server';

export const posts = gql`
extend type Query {
  post(id: ID): Post!
  posts(input: InputFields): [Post!]!
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
