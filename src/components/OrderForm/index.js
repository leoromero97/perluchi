import React from "react";
import clsx from "clsx";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Textfield from "../Textfield";
import { ROUTES } from "../../constants/routes";
import { PAYMENT_METHODS } from "../../constants/paymentMethods";
import { DELIVERY_CHANNEL } from "../../constants/deliveryChannel";

function OrderForm({
  onSubmit,
  className,
  values,
  onChange,
  onPaymentMethodChange,
  onDeliveryChange,
}) {
  const handlePaymentMethodChange = (newPaymentMethod) =>
    onPaymentMethodChange(newPaymentMethod);
  const handleDeliveryChange = (newDeliveryChannel) =>
    onDeliveryChange(newDeliveryChannel);
  const { name, phoneNumber, address, deliveryChannel } = values;

  return (
    <div className={clsx("flex flex-col w-full", className)}>
      <form onSubmit={onSubmit} className="flex flex-col w-full gap-6">
        <Textfield
          label="Nombre y apellido"
          placeholder="Hugo Bareiro"
          name="name"
          value={name}
          onChange={onChange}
          required
          maxLength={20}
        />
        <Textfield
          label="Número de celular"
          placeholder="1122334848"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          required
          type="number"
          maxLength={16}
        />
        <Dropdown
          label="Elegí cómo tener tu pedido"
          options={DELIVERY_CHANNEL}
          onChange={handleDeliveryChange}
          placeholder="Selecciona tu método de pago"
        />
        {deliveryChannel === "Delivery" && (
          <Textfield
            label="Ingresa tu dirección"
            placeholder="Cóndor 2233"
            name="address"
            value={address}
            onChange={onChange}
            required
            maxLength={28}
          />
        )}
        <Dropdown
          label="Elegí el método de pago"
          options={PAYMENT_METHODS}
          onChange={handlePaymentMethodChange}
          placeholder="Selecciona tu método de pago"
        />
        <div className="flex flex-col w-full items-center gap-4 pt-4">
          <Button
            isButton
            isPrimary
            text="Realizar pedido"
            className="w-full"
          />
          <Button
            to={ROUTES.CART}
            isTertiary
            text="Volver al carrito"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
