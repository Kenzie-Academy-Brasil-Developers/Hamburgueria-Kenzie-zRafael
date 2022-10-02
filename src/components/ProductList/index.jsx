import "./style.css";
import { Product } from "../Product";

export function ProductList({
  products,
  handleClick,
  filteredProducts,
  isFilteredProducts,
}) {
  return (
    <section className="productList">
      {!isFilteredProducts
        ? products.map((product) => (
            <Product
              key={product.id}
              productInfo={product}
              handleClick={handleClick}
            />
          ))
        : filteredProducts.map((product) => (
            <Product
              key={product.id}
              productInfo={product}
              handleClick={handleClick}
            />
          ))}
    </section>
  );
}
