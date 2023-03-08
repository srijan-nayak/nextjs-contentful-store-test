import { TypeProduct } from "@/contentful/models/product";
import { Asset, AssetFile } from "contentful";
import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
  product: TypeProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const image = product.fields.image as Asset;
  const imageFile = image.fields.file as AssetFile;
  const { name, slug, price } = product.fields;

  return (
    <article>
      <header>
        <Image
          src={"https:" + imageFile.url}
          alt=""
          width={imageFile.details.image?.width}
          height={imageFile.details.image?.height}
        />
      </header>
      <div className="headings">
        <h2>
          <Link href={"/products/" + slug}>
            {name as string}
          </Link>
        </h2>
        <h3><strong>${price as number}</strong></h3>
      </div>
    </article>
  );
};

export default ProductItem;
