import useCartProducts from "./useCartProducts";
import useCartTotal from "./useCartTotal";

const useCart = () => {
  const {
    products,
    addProduct,
    removeProduct,
    clearProductsCart,
    decreaseProductQuantity,
  } = useCartProducts();

  const { total, updateCartTotal, clearCartTotal } = useCartTotal();

  return {
    products,
    addProduct,
    removeProduct,
    clearProductsCart,
    total,
    updateCartTotal,
    clearCartTotal,
    decreaseProductQuantity,
  };
};

export default useCart;
