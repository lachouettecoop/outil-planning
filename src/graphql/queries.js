/* eslint-disable */
import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
query($id: string){
  user(id: $id) {
    username
    roles
  }
}
`;

export const TEST_GET_USER = gql`
query{
  user(id: "/api/users/3841") {
    username
    roles
  }
}
`;



