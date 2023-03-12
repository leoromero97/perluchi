import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { ROUTES } from "../../constants/routes";
import useCart from "../../hooks/cart/useCart";
import Error from "../../components/Error/index";
import errorSearchVector from "../../assets/vc-undraw_web_search_re_efla.svg";

function CartPage() {
  const { products, total, clearCartTotal, clearProductsCart } = useCart();
  const handleOnClear = () => {
    clearCartTotal();
    clearProductsCart();
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-screen-xl w-full gap-10 py-8 px-4 text-yellow-900 items-center">
        <h1 className="text-5xl font-semibold text-center">
          Carrito de compra
        </h1>
        {products && total.productQuantity > 0 ? (
          <div className="flex flex-col md:flex-row bg-white w-full border-2 rounded-2xl px-2 py-4 md:px-4 gap-10 md:gap-20">
            <ul className="w-full flex flex-col gap-1 bg-yellow-gray-default rounded-md">
              <p className="text-yellow-700 text-3xl font-semibold mb-8">
                Vas a comprar
              </p>
              <div className="flex flex-col w-full gap-6">
                {products &&
                  products.map((product) => (
                    <li
                      key={product?.id}
                      className="grid grid-flow-col grid-cols-4 md:max-w-2xl items-center gap-8 rounded-lg text-yellow-900 text-sm md:text-base font-semibold"
                    >
                      <img
                        src={product?.imageUrl}
                        alt={product?.name}
                        className="h-10 w-10 md:h-16 md:w-16 rounded-md"
                      />
                      <p>{product?.name}</p>
                      <p>
                        {product?.quantity > 1
                          ? product?.quantity.toString().concat(" unidades")
                          : product?.quantity.toString().concat(" unidad")}
                      </p>
                      <p>${product?.price}</p>
                    </li>
                  ))}
              </div>
            </ul>
            {total.productQuantity !== 0 && (
              <div className="flex flex-col gap-6 md:gap-10 w-full text-yellow-900 text-lg justify-between">
                <div className="flex flex-col w-full gap-4">
                  <p className="text-yellow-700 text-3xl font-semibold mb-8">
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
            image={errorSearchVector}
          />
        )}
      </div>
    </Layout>
  );
}

export default CartPage;
