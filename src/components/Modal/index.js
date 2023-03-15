import clsx from "clsx";
import Button from "../Button";
import iconClose from "../../assets/ic-multiply.svg";

function Modal({
  className,
  image,
  title,
  subtitle,
  onClose,
  primaryAction,
  secondaryAction,
  show,
}) {
  return (
    <div
      className={clsx(
        "absolute w-full h-full bg-yellow-900 bg-opacity-80 left-0 top-0",
        show ? "" : "hidden"
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute w-5/6 max-w-u638 flex gap-4 flex-col items-center bg-white py-12 px-6 rounded-md",
          className
        )}
      >
        <img
          src={iconClose}
          alt="Ícono para cerrar modal"
          className="self-end hover:cursor-pointer"
        />
        {image?.src && (
          <button onClick={onClose}>
            <img
              src={image?.src}
              alt={image.alt}
              width={image.dimensions?.width}
              height={image.dimensions?.height}
            />
          </button>
        )}
        <p className="text-2xl text-yellow-900 font-bold">{title}</p>
        <p className="text-lg text-yellow-800">{subtitle}</p>
        <div className="flex flex-col md:flex-row mt-4 gap-4 w-full">
          {primaryAction?.text && (
            <Button
              onClick={primaryAction.action}
              text={primaryAction.text}
              isPrimary
              isButton
              className="md:w-full"
            />
          )}
          {secondaryAction?.text && (
            <Button
              onClick={secondaryAction.action}
              text={secondaryAction.text}
              isTertiary
              isButton
              className="md:w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
