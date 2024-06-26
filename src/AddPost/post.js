import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI =
  "https://api-ap-south-1.graphcms.com/v2/cl444va0v061p01z8c6v31yy7/master";

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a default function for API route to work
export default async function asynchandler(values) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTU2MzQ3MTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDQ0NHZhMHYwNjFwMDF6OGM2djMxeXk3L21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjM4NWJmY2MxLTc5MTEtNDY5NS1hODZiLTc0NTRiMjcyZGRkMiIsImp0aSI6ImNsNGw2NXJ1bjZkcXUwMXo2aHNpZjB2bDMifQ.Etcvc3eGNQQxtUj4aO0mJ9eF7y376j1S-2XtzK-6-bro8qf59uljuNXsTuum_NsHsxfppCuZyCdjze6Ya0sQq4IrOl4nJ77ArVBC4U3pKzlWV9HlOLxninBX8lZGcimf7BesEr3uibHy8JO7yiDRrOWB1J4xuDRCI-D8QIw1SAwxsPw_6UVB8xTORwtqvx8te-yEc6AHczD3NvADt8fK7_pOZqV3bRpbUwQz41Hy9Zf2O9tdCjuMyUWYNkRjAaAaL5-Ip0MVhbKccJABj8YufDz_bRGCqUoyQn4qPJeGXqMJyL0rLhUSF1LwK7vHE8jO-P-J1hUZBclpkL4qrZkcnJDjY-F3l4JeFhoFporNrW3YbrcOxn77y8Hl6oGN5oK_orKQvQXVFD8-oQqfxE3Ga5_0-ERNmqREg7hLMcf8zQii7gLPxXhMo2DAqU38aO0Z4nqxeO-WXSUt21lwIgleEX1Ihwiy9UWcC4A0RKnRy6U0DavgX6qdC10vxcfFeYxljPkYgn19qODbwGaQTHSh0IEuj6ImTo4_if_TR4fpRDPp4uUUQTap4TYgoAtWWuKyKZ0vpq7PoeU4ny3u6Bng7vcdEEHY3c9Hs6HwcC9_IAOvUhFDGVmFNTQsxAuZEb14-YkOHlrFBA_Br9oOm1HvAPQBV0I9JQ2AL83KVLO5cEU"}`,
    },
  });

  const query = gql`
  mutation{
  
    publishPost($title: String!, $content: String!, $slug: String!) {
   title :title
     content:content
     slug:slug
     
   }
   
   }
  `;

  const result = await graphQLClient.request(query, {
    title: values.title,
    content: values.content,
    slug: values.slug,
  });

  return result;
}
