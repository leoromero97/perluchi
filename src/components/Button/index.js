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
            baseButtonStyle,
            className,
            isPrimary && primaryButtonStyle,
            isSecondary && secondaryButtonStyle,
            isTertiary && tertiaryButtonStyle
          )}
        >
          {text}
        </button>
      )}
      {messageOrderExternal && (
        <a
          href={`https://wa.me/541152212488?text=${messageOrderExternal}`}
          rel="noopener noreferrer"
          target="_blank"
          className={clsx(
            baseButtonStyle,
            className,
            isPrimary && primaryButtonStyle,
            isSecondary && secondaryButtonStyle,
            isTertiary && tertiaryButtonStyle
          )}
        >
          {text}
        </a>
      )}
      {to && (
        <Link
          to={to}
          className={clsx(
            baseButtonStyle,
            className,
            isPrimary && primaryButtonStyle,
            isSecondary && secondaryButtonStyle,
            isTertiary && tertiaryButtonStyle
          )}
        >
          {text}
        </Link>
      )}
    </>
  );
}

export default Button;
