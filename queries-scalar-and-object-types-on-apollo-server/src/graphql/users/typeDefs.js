import { gql } from 'apollo-server';

export const users = gql`
extend type Query {
 user: User!
 users: [User!]!
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
