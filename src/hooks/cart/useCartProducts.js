import { useCartContext } from "../../context/cartContext";

import useCartTotal from "./useCartTotal";

const useCartProducts = () => {
  const { products, setProducts } = useCartContext();
  const { updateCartTotal } = useCartTotal();

  const updateQuantitySafely = (currentProduct, targetProduct, quantity) => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: currentProduct.quantity + quantity,
      });
    } else {
      return currentProduct;
    }
  };

  const addProduct = (newProduct) => {
    let updatedProducts;
    const isProductAlreadyInCart = products.some(
      (product) => newProduct.id === product.id
    );

    if (isProductAlreadyInCart) {
      updatedProducts = products.map((product) => {
        return updateQuantitySafely(product, newProduct, newProduct.quantity);
      });
    } else {
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  const removeProduct = (productToRemove) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productToRemove.id
    );

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  const clearProductsCart = () => {
    setProducts([]);
  };

  const decreaseProductQuantity = (productToDecrease) => {
    const updatedProducts = products.map((product) => {
      return updateQuantitySafely(product, productToDecrease, -1);
    });

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  return {
    products,
    addProduct,
    removeProduct,
    clearProductsCart,
    decreaseProductQuantity,
  };
};

export default useCartProducts;
