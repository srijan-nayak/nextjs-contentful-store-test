import { TypeProduct } from "@/contentful/models/product";
import ProductItem from "./product-item";

type ProductsListProps = {
  products: TypeProduct[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  const midPoint = products.length / 2;

  return (
    <div className="grid">
      <div>
        {products.slice(0, midPoint).map((product) => (
          <ProductItem product={product} key={product.sys.id} />
        ))}
      </div>
      <div>
        {products.slice(midPoint).map((product) => (
          <ProductItem product={product} key={product.sys.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
