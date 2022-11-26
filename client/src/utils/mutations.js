import { gql } from '@apollo/client';

//SETS UP THE MUTATION TO ADD A CUSTOMER
export const ADD_CUSTOMER = gql`
  mutation addCustomer(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addCustomer(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      customer {
        _id
      }
    }
  }
`;
