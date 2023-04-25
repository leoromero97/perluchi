import Button from "../Button";

function Popup({
  iconButton,
  messageOrder,
  text,
  textButton,
  title,
  onClick,
  secondTextButton,
}) {

  return (
    <div className="absolute h-screen w-screen bg-yellow-900 bg-opacity-95 flex items-center justify-center px-2">
      <div className="bg-yellow-100 flex flex-col gap-8 py-10 px-4 rounded-lg w-full max-w-xs md:max-w-xl">
        <h2 className="text-xl md:text-3xl font-semibold text-yellow-900 self-center">
          {title}
        </h2>
        <p className="text-base md:text-lg text-yellow-900 font-medium">{text}</p>
        <div className="flex flex-col mt-4 gap-4 w-full">
          <Button
            messageOrderExternal={messageOrder}
            text={textButton}
            icon={iconButton}
            className="bg-yellow-default hover:bg-yellow-300"
          />
          <Button isTertiary isButton onClick={onClick} text={secondTextButton} />
        </div>
      </div>
    </div>
  );
}

export default Popup;
