import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
query LOGGED_IN_USER ($id: ID!){
  user(id: $id) {
    id
    username
    roles
    nom
    prenom
  }
}
`;

export const NEXT_PIAFS = gql`
query NEXT_PIAFS ($piaffeur: String){
  piafs(piaffeur:$piaffeur){
    edges{
      node{
        id
        creneau{
          date
          heureDebut
          heureFin
        }
        piaffeur{
          prenom
          nom
          username
        }
        role{
          libelle
        }        
      }
    }
  }
}
`;



