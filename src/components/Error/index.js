import React from "react";
import clsx from "clsx";
import Button from "../Button";
import { ROUTES } from "../../constants/routes";

function Error({ className, image, imageClassName, message }) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-20 w-full h-fit text-center max-w-4xl",
        className
      )}
    >
      <img src={image} alt="Icono del error" className={imageClassName} />
      <p className="text-xl text-yellow-900 font-bold">{message}</p>
      <Button isPrimary text="Volver al inicio" to={ROUTES.HOME} />
    </div>
  );
}

export default Error;
