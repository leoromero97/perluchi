import React from "react";
import clsx from "clsx";

function Textfield({
  className,
  name,
  label,
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
    <div className={clsx('flex flex-col', className)}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className="flex h-full flex-1 rounded-xl border border-gray-300 py-3 px-4 placeholder:text-gray-300"
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
    </div>
  );
}

export default Textfield;
