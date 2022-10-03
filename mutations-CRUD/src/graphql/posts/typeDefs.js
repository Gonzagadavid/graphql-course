import { gql } from 'apollo-server';

export const posts = gql`
extend type Query {
  post(id: ID): Post!
  posts(input: InputFields): [Post!]!
}

extend type Mutation {
  createPost(data: CreatePostInput!): Post!
}

type Post {
  id: ID!
  title: String!
  body: String!
  user: User!,
  indexRef: Int!,
  createdAt: String!
}

input CreatePostInput {
  title: String!
  body: String!
  userId: String!,
}
`;
