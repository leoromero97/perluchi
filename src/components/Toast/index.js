import React from "react";
import clsx from "clsx";
import iconCheck from "../../assets/ic-check-circle.svg";
import iconInfo from "../../assets/ic-info-circle.svg";

function Toast({ className, isError, isInfo, isSuccess, message }) {
  return (
    <div
      className={clsx(
        "flex items-center px-2 py-1 rounded-md gap-2",
        isError && "bg-red text-red-dark",
        isSuccess && "bg-green text-green-dark",
        isInfo && "bg-yellow-100 text-yellow-800",
        className
      )}
    >
      <img
        src={(isError || isInfo) && !isSuccess ? iconInfo : iconCheck}
        alt="Icono"
      />
      <p className="text-sm font-bold">{message}</p>
    </div>
  );
}

export default Toast;
