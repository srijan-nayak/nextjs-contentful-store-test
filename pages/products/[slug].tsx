import createContentfulClient from "@/contentful/client";
import { TypeProduct, TypeProductFields } from "@/contentful/models/product";
import { Asset, AssetFile } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createContentfulClient();
  const result = await client.getEntries<TypeProductFields>({
    content_type: "product",
  });

  const paths = result.items.map((item) => ({
    params: {
      slug: item.fields.slug as string,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createContentfulClient();
  const result = await client.getEntries<TypeProductFields>({
    content_type: "product",
    "fields.slug": params!.slug as string,
  });

  return {
    props: {
      product: result.items[0],
    },
    revalidate: 10,
  };
};

type ProductDetailsProps = {
  product: TypeProduct;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  if (!product) return <main className="container" aria-busy="true"></main>;

  const image = product.fields.image as Asset;
  const imageFile = image.fields.file as AssetFile;
  const { name, description, price } = product.fields;

  return (
    <main className="container">
      <div className="grid">
        <div>
          <div className="headings">
            <h1>{name as string}</h1>
            <h2>
              <strong>${price as number}</strong>
            </h2>
          </div>
          <p>{description as string}</p>
          <button>Add to cart</button>
        </div>
        <div>
          <Image
            src={"https:" + imageFile.url}
            alt=""
            width={imageFile.details.image?.width}
            height={imageFile.details.image?.height}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
