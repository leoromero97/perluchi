import useCartProducts from "./useCartProducts";
import useCartTotal from "./useCartTotal";

const useCart = () => {
  const { products, addProduct, removeProduct, clearProductsCart } = useCartProducts();

  const { total, updateCartTotal, clearCartTotal } = useCartTotal();

  return {
    products,
    addProduct,
    removeProduct,
    clearProductsCart,
    total,
    updateCartTotal,
    clearCartTotal,
  };
};

export default useCart;
