import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
query($id: ID!){
  user(id: $id) {
    username
    roles
    nom
    prenom
  }
}
`;




