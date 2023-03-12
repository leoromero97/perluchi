import { useCartContext } from "../../context/cartContext";

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products) => {
    const productQuantity = products.reduce((sum, product) => {
      sum += product.quantity;
      return sum;
    }, 0);

    const totalPrice = products.reduce((sum, product) => {
      sum += product.price * product.quantity;
      return sum;
    }, 0);

    const total = {
      productQuantity,
      totalPrice,
    };

    setTotal(total);
  };

  const clearCartTotal = () => {
    const total = { productQuantity: 0, totalPrice: 0 };
    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
    clearCartTotal,
  };
};

export default useCartTotal;
