import React from "react";
import Toast from "../Toast";

function OrderSummary({ productQuantity, totalPrice }) {
  return (
    <div className="flex flex-col w-full text-yellow-900 text-lg gap-6">
      <p className="text-2xl font-semibold">Resumen de tu compra</p>
      <div className="flex gap-4">
        <p className="text-yellow-800">Total de productos:</p>
        <p className="font-semibold">{productQuantity}</p>
      </div>
      <div className="flex gap-4">
        <p className="text-yellow-800">Precio total:</p>
        <p className="font-semibold">${totalPrice}</p>
      </div>
      <Toast isInfo message="Tu pedido podría demorar entre 35 y 50 minutos" />
    </div>
  );
}

export default OrderSummary;
