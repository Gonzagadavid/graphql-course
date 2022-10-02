import { gql } from 'apollo-server';

export const inputFields = gql`
  input InputFields {
    _sort: String
    _order: Orders
    _start: Int
    _limit: Int
  }

  enum Orders {
    ASC
    DESC
  }
`;
