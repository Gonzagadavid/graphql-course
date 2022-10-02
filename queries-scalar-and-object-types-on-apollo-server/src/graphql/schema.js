import { gql } from 'apollo-server';
import { inputFields } from './inputFields/typeDefs.js';
import { postResolvers } from './posts/resolvers.js';
import { posts } from './posts/typeDefs.js';
import { userResolvers } from './users/resolvers.js';
import { users } from './users/typeDefs.js';

const rootTypeDefs = gql`
type Query {
 _root: Boolean
} 
`;

export const typeDefs = [rootTypeDefs, users, posts, inputFields];

export const resolvers = [userResolvers, postResolvers];
