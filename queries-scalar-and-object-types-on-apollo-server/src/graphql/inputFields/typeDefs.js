import { gql } from 'apollo-server';

export const inputFields = gql`
  input InputFields {
    _sort: String
    _order: String
    _start: Int
    _limit: Int
  }
`;
