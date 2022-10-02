import "./style.css";
import { useState } from "react";
import logo from "../../images/logo.png";

export function Header({
  setFilteredProducts,
  products,
  setIsFilteredProducts,
  isFilteredProducts,
}) {
  const [input, setInput] = useState("");

  return (
    <header className="appHeader">
      <figure className="logoFigure">
        <img className="logoFigure__img" src={logo} alt="Burger Kenzie Logo" />
      </figure>

      <form className="header__inputForm">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="header__inputForm__input"
          type="text"
          placeholder="Digitar pesquisa"
        />
        <button
          onClick={() => {
            if (!isFilteredProducts) {
              setIsFilteredProducts(true);
            } else if (!input) {
              setIsFilteredProducts(false);
            }

            setFilteredProducts(
              products.filter((product) =>
                product.name.toLowerCase().includes(input.toLowerCase())
              )
            );
          }}
          className="header__inputForm__button"
          type="button"
        >
          Pesquisar
        </button>
      </form>
    </header>
  );
}
