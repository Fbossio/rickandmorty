import axios from "axios";

const query = `
  query GetLocationResidentsImages($id: ID!) {
    location(id: $id) {
      residents {
        image
      }
    }
  }
`;

export const queryCharactersImages = async (id: string) => {
    const response = await axios.post('https://rickandmortyapi.com/graphql', {
        query,
        variables: {
            id
        }
    })
    const residents = response.data.data.location.residents.slice(0, 20);
    return residents
}