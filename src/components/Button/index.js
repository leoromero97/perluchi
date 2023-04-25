import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  baseButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
  tertiaryButtonStyle,
} from "./constants";

function Button({
  className,
  text = "",
  icon,
  isButton,
  isPrimary,
  isSecondary,
  isTertiary,
  messageOrderExternal = "",
  onClick,
  to = "",
}) {
  return (
    <>
      {isButton && (
        <button
          onClick={onClick}
          className={clsx(
            "flex items-center justify-center gap-4",
            baseButtonStyle,
            className,
            isPrimary && primaryButtonStyle,
            isSecondary && secondaryButtonStyle,
            isTertiary && tertiaryButtonStyle
          )}
        >
          {icon && (
            <img
              src={icon.src}
              alt={icon.alt || "Ícono"}
              className={icon.className}
            />
          )}
          {text}
        </button>
      )}
      {messageOrderExternal && (
        <a
          href={`https://wa.me/541137802707?text=${messageOrderExternal}`}
          rel="noopener noreferrer"
          target="_blank"
          className={clsx(
            "flex items-center justify-center gap-4",
            baseButtonStyle,
            className,
            isPrimary && primaryButtonStyle,
            isSecondary && secondaryButtonStyle,
            isTertiary && tertiaryButtonStyle
          )}
        >
          {icon && (
            <img
              src={icon.src}
              alt={icon.alt || "Ícono"}
              className={icon.className}
            />
          )}
          {text}
        </a>
      )}
      {to && (
        <Link
          to={to}
          className={clsx(
            "flex items-center justify-center gap-4",
            baseButtonStyle,
            className,
            isPrimary && primaryButtonStyle,
            isSecondary && secondaryButtonStyle,
            isTertiary && tertiaryButtonStyle
          )}
        >
          {icon && (
            <img
              src={icon.src}
              alt={icon.alt || "Ícono"}
              className={icon.className}
            />
          )}
          {text}
        </Link>
      )}
    </>
  );
}

export default Button;
