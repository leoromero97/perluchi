import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

const totalInitialValues = {
  productQuantity: 0,
  totalPrice: 0,
};

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(totalInitialValues);

  const CartContextValue = {
    products,
    setProducts,
    total,
    setTotal,
  };

  return <CartContext.Provider value={CartContextValue} {...props} />;
};

export { CartProvider, useCartContext };
