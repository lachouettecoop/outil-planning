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

export const PLANNING = gql`
query PLANNING ($dateIni: String, $dateEnd: String){
  creneaus(date: {after:$dateIni, before:$dateEnd}) {
    edges{
      node{
        id,
        date,
        heureFin,
        heureDebut,
        titre,
        piafs{
          edges{
            node{
              id,
              role {
                id,
                libelle
              },
              piaffeur{
                nom,
                prenom,
                email,
                telephone
              }
            }
          }
        }
      }
    }
  }
}`;


export const REGISTRATION = gql`
mutation REGISTRATION ($idPiaf:ID!, $idPiaffeur:String){
  updatePiaf(input:{id:$idPiaf, piaffeur: $idPiaffeur}){
    piaf{
      id
      piaffeur{
        id
      }
    }
  }
}
`


