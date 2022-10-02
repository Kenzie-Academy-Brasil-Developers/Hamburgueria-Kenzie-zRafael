import "./style.css";

export function Product({ productInfo, handleClick }) {
  function formatPrice(productPrice) {
    const priceString = String(productPrice);
    if (!priceString.includes(".")) {
      return `R$${productPrice},00`;
    } else {
      return `R$${priceString.replace(".", ",")}`;
    }
  }

  return (
    <div id={productInfo.id} className="product">
      <figure className="product__figure">
        <img src={productInfo.img} alt="products" />
        <figcaption hidden>products</figcaption>
      </figure>
      <div className="product__info">
        <h3 className="product__info__title">{productInfo.name}</h3>
        <span className="product__info__category">{productInfo.category}</span>
        <span className="product__info__price">
          {formatPrice(productInfo.price)}
        </span>
        <button
          onClick={(e) => handleClick(e.target.parentElement.parentElement.id)}
          className="product__info__button"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
