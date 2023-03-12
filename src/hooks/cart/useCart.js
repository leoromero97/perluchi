import useCartProducts from "./useCartProducts";
import useCartTotal from "./useCartTotal";

const useCart = () => {
  const { products, addProduct, clearProductsCart } = useCartProducts();

  const { total, updateCartTotal, clearCartTotal } = useCartTotal();

  return {
    products,
    addProduct,
    clearProductsCart,
    total,
    updateCartTotal,
    clearCartTotal,
  };
};

export default useCart;
