import { GetStaticProps } from "next";
import Head from "next/head";

import ProductsList from "@/components/products-list";
import createContentfulClient from "@/contentful/client";
import { TypeProduct, TypeProductFields } from "@/contentful/models/product";

export const getStaticProps: GetStaticProps = async () => {
  const client = createContentfulClient();
  const result = await client.getEntries<TypeProductFields>({
    content_type: "product",
  });

  const products: TypeProduct[] = result.items;

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};

type HomeProps = {
  products: TypeProduct[];
};

const Home = ({ products }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Products - My Store</title>
      </Head>
      <main className="container">
        <h1>Products</h1>
        <ProductsList products={products} />
      </main>
    </>
  );
};

export default Home;
