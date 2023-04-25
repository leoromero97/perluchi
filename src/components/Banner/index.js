import clsx from "clsx";
import Button from "../Button/";

function Banner({ className, title, subtitle, buttonText }) {
  const messageOrder = "Hola Perluchi, me gustaría realizar un pedido...";

  return (
    <div
      className={clsx(
        "w-full flex flex-col md:flex-row items-center justify-center bg-image-banner h-120 md:h-160 bg-no-repeat bg-center bg-cover",
        className
      )}
    >
      <div className="flex w-full h-full bg-opacity-60 bg-black px-4 py-24">
        <div className="m-auto max-w-screen-xl flex flex-col gap-12 md:gap16">
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-100">
            {title}
          </h1>
          <span className="text-2xl font-medium text-yellow-100">
            {subtitle}
          </span>
          {buttonText && (
            <Button
              text={buttonText}
              isPrimary
              className="w-fit"
              messageOrderExternal={messageOrder}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
