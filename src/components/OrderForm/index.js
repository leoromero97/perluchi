import React from "react";
import clsx from "clsx";
import Button from "../Button";
import Input from "../Input";
import Toast from "../Toast";
import { ROUTES } from "../../constants/routes";

function OrderForm({
  onSubmit,
  className,
  values,
  onChange,
  errorValidationEmail,
}) {
  return (
    <div className={clsx("flex flex-col w-full", className)}>
      <form onSubmit={onSubmit} className="flex flex-col w-full gap-6">
        <Input
          placeholder="Nombre"
          name="firstName"
          value={values.firstName}
          onChange={onChange}
          required
          maxLength={20}
        />
        <Input
          placeholder="Apellido"
          name="lastName"
          value={values.lastName}
          onChange={onChange}
          maxLength={20}
        />
        <Input
          placeholder="Número de celular"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={onChange}
          required
          type="number"
          maxLength={16}
        />
        <Input
          placeholder="Dirección"
          name="address"
          value={values.address}
          onChange={onChange}
          required
          maxLength={28}
        />
        <Input
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChange}
          required
          type="email"
        />
        <Input
          placeholder="Email"
          name="emailValidate"
          value={values.emailValidate}
          onChange={onChange}
          required
          type="email"
        />
        {errorValidationEmail && (
          <Toast
            message="Los emails no son iguales, intentá nuevamente"
            isError
          />
        )}
        <div className="flex flex-col w-full items-center gap-4 pt-4">
          <Button
            isButton
            isPrimary
            text="Confirmar datos"
            className="w-full"
          />
          <Button
            to={ROUTES.CART}
            isSecondary
            text="Volver atrás"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
