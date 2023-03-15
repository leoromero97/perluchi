import React, { useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error/index";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { ROUTES } from "../../constants/routes";
import useCart from "../../hooks/cart/useCart";
import vectorEmptyCart from "../../assets/vc-undraw_empty_cart.svg";
import imagePlaceholder from "../../assets/image-placeholder.png";
import iconTash from "../../assets/ic-trash-alt.svg";

function CartPage() {
  const {
    products,
    total,
    clearCartTotal,
    clearProductsCart,
    removeProduct,
    decreaseProductQuantity,
  } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [idProduct, setIdProduct] = useState("");

  const handleOnClear = () => {
    clearCartTotal();
    clearProductsCart();
  };
  
  const handleOnTash = (id) => {
    setIdProduct(id);
    setIsOpen(true);
  };

  const handleDecrement = (id) => {
    const product = products
      .filter((productId) => productId.id === id)
      .map((product) => product)[0];
    if (product.quantity <= 1) {
      removeProduct(product);
      return;
    }
    decreaseProductQuantity(product);
    setIsOpen(!isOpen)
  };

  const handleRemove = (id) => {
    const productToRemove = products
      .filter((productId) => productId.id === id)
      .map((product) => product)[0];
    removeProduct(productToRemove);
    setIsOpen(!isOpen)
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-screen-xl w-full gap-10 py-8 px-4 text-yellow-900 items-center pt-32">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Carrito de compra
        </h1>
        {products && total.productQuantity > 0 ? (
          <div className="flex flex-col md:flex-row bg-white w-full border-2 rounded-2xl px-2 py-4 md:px-4 gap-16 md:gap-6">
            <ul className="w-full flex flex-col gap-1">
              <p className="text-yellow-700 text-xl md:text-3xl font-semibold mb-4 md:mb-8">
                Vas a comprar
              </p>
              <div className="flex flex-col w-full gap-2 md:gap-6">
                {products &&
                  products.map((product) => (
                    <li
                      key={product?.id}
                      className="grid grid-flow-col grid-cols-5 md:max-w-2xl items-center gap-8 text-yellow-900 text-xs md:text-base font-semibold bg-yellow-gray-default rounded-md odd:bg-yellow-100 justify-items-center"
                    >
                      <img
                        src={product?.imageUrl || imagePlaceholder}
                        alt={product?.name}
                        className="h-8 w-8 md:h-16 md:w-16 rounded-md"
                      />
                      <p>{product?.name}</p>
                      <p>
                        {product?.quantity > 1
                          ? product?.quantity.toString().concat(" unidades")
                          : product?.quantity.toString().concat(" unidad")}
                      </p>
                      <p>${product?.price * product.quantity}</p>
                      <button
                        onClick={() => handleOnTash(product.id)}
                        className="hover:bg-red active:bg-red rounded-md p-1"
                      >
                        <img src={iconTash} alt="Icono tacho de basura" />
                      </button>
                    </li>
                  ))}
              </div>
            </ul>
            {total.productQuantity !== 0 && (
              <div className="flex flex-col gap-6 md:gap-10 w-full text-yellow-900 text-lg justify-between">
                <div className="flex flex-col w-full gap-4">
                  <p className="text-yellow-700 text-xl md:text-3xl font-semibold md:mb-4">
                    Resumen
                  </p>
                  <div className="flex gap-4">
                    <p className="text-yellow-800">Total de productos:</p>
                    <p className="font-semibold">{total?.productQuantity}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-yellow-800">Precio total:</p>
                    <p className="font-semibold">${total?.totalPrice}</p>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <Button
                    to={ROUTES.CHECKOUT}
                    isPrimary
                    text="Continuar compra"
                    className="w-full"
                  />
                  <Button
                    isButton
                    isTertiary
                    onClick={handleOnClear}
                    text="Vaciar carrito"
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Error
            message="Aún no tenes productos en tu carrito, agregalos para disfrutar del mejor sabor"
            image={vectorEmptyCart}
            imageClassName="h-64"
          />
        )}
      </div>
      <Modal
        show={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        title="¿Cuántas unidades te gustaría eliminar?"
        primaryAction={{
          text: "Eliminar una",
          action: () => handleDecrement(idProduct),
        }}
        secondaryAction={{
          text: "Eliminar todas",
          action: () => handleRemove(idProduct),
        }}
      />
    </Layout>
  );
}

export default CartPage;
