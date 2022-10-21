import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getForm = async (id) => {
  const query = gql`
    query getForm($id: ID!) {
      form(where: { id: $id }) {
        id
        title
        fields {
          id
          label
          type
          required
        }
      }
    }
  `;

  const variables = { id };

  const data = await request(graphqlAPI, query, variables);

  return data.form;
}
export const addform= async () => {
    
    const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}