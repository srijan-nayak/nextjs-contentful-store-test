import { createClient } from "contentful";

const createContentfulClient = () =>
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN!,
  });

export default createContentfulClient;
