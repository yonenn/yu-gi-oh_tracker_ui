import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://localhost:4000/graphql");

async function fetchGql(query, variables) {
  const response = await client.request(query, variables);
  return await response;
}

export default fetchGql;
