import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilteredProducts, setIsFilteredProducts] = useState(false);

  function handleClick(id) {
    if (isCartEmpty) {
      setIsCartEmpty(!isCartEmpty);
    }

    if (!currentSale.find((product) => parseInt(id) === product.id)) {
      setCurrentSale([
        products.find((product) => product.id === parseInt(id)),
        ...currentSale,
      ]);
    } else {
      toast.warn("Não é possivel adicionar mais de um item ao carrinho", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => window.alert(err));
  });

  return (
    <div className="App">
      <Header
        setIsFilteredProducts={setIsFilteredProducts}
        isFilteredProducts={isFilteredProducts}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <main>
        <ProductList
          products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
          isFilteredProducts={isFilteredProducts}
        />
        <Cart
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          isCartEmpty={isCartEmpty}
          setIsCartEmpty={setIsCartEmpty}
        />
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
