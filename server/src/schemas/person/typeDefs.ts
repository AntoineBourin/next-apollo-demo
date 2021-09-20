import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    name: String
    getPersons(limit: Int, start: Int): [Person]
  }
  
  type Person {
    name: String!
    address: String!
    email: String!
    phoneNumber: String!
  }
`;

export default typeDefs;