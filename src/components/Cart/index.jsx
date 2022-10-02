import "./style.css";
import { CartContent } from "../CartContent";

export function Cart({
  currentSale,
  isCartEmpty,
  setCurrentSale,
  setIsCartEmpty,
}) {
  return (
    <section className="cart">
      <div className="cart__header">
        <h2>Carrinho de compras</h2>
      </div>
      {isCartEmpty ? (
        <div className="emptyCart__content">
          <p className="emptyCart__content__p">Sua sacola está vazia</p>
          <span className="emptyCart__content__span">Adicione itens</span>
        </div>
      ) : (
        <CartContent
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          isCartEmpty={isCartEmpty}
          setIsCartEmpty={setIsCartEmpty}
        />
      )}
    </section>
  );
}
