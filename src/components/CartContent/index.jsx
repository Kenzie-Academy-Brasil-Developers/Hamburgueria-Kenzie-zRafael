import "./style.css";

export function CartContent({
  currentSale,
  setCurrentSale,
  isCartEmpty,
  setIsCartEmpty,
}) {
  function formatPrice(productPrice) {
    productPrice = productPrice.toFixed(2);
    const priceString = String(productPrice);

    return `R$${priceString.replace(".", ",")}`;
  }

  return (
    <>
      <div className="cart__content">
        {currentSale.map((product) => {
          return (
            <div id={product.id} key={product.id} className="cartItem">
              <div className="cartItem__imgAndTitleDiv">
                <figure className="cartItem__figure">
                  <img src={product.img} alt={product.name} />
                  <figcaption hidden>{product.name}</figcaption>
                </figure>
                <div className="cartItem__info">
                  <h3 className="cartItem__info--h3">{product.name}</h3>
                  <span className="cartItem__info--span">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="cartItem__buttonDiv">
                <button
                  onClick={(e) => {
                    setCurrentSale(
                      currentSale.filter(
                        (product) =>
                          product.id !==
                          Number(e.target.parentElement.parentElement.id)
                      )
                    );
                  }}
                  className="cartItem__buttonDiv--button"
                >
                  remover
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <section className="cartTotal">
        <div className="separator"></div>
        <div className="cartTotal__price">
          <span className="carTotal__price-text">Total:</span>
          <span className="carTotal__price-total">
            {formatPrice(
              currentSale.reduce((acc, curr) => acc + curr.price, 0)
            )}
          </span>
        </div>
        <button
          onClick={() => {
            setCurrentSale([]);
            setIsCartEmpty(!isCartEmpty);
          }}
          className="cartTotal__removeAllbutton"
        >
          Remover todos
        </button>
      </section>
    </>
  );
}
