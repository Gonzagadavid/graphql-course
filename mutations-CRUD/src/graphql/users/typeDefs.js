import { gql } from 'apollo-server';

export const users = gql`
extend type Query {
 user(id: ID!): User!
 users(input: InputFields): [User!]!
} 

type User {
  id: ID!,
  firstName: String!,
  lastName: String!,
  userName: String!,
  indexRef: Int!,
  createdAt: String!
  posts: [Post!]!
}
`;
