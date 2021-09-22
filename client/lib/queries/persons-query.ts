import { gql } from "@apollo/client";

export interface Person {
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
}

const PERSONS_QUERY = gql`
  query($limit: Int, $start: Int) {
    getPersons(limit: $limit, start: $start) {
      name
      address
      email
      phoneNumber
    }
  }
`;

export default PERSONS_QUERY;
