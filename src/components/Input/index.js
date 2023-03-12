import React from "react";
import clsx from "clsx";

function Input({
  className,
  name,
  placeholder,
  onChange,
  value,
  required = false,
  pattern,
  maxLength,
  type,
  ...props
}) {
  return (
    <input
      className={clsx(
        "flex h-full flex-1 rounded-xl border border-gray-300 py-3 px-4 placeholder:text-gray-300",
        className
      )}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
      required={required}
      pattern={pattern}
      type={type}
      maxLength={maxLength}
      {...props}
    />
  );
}

export default Input;
