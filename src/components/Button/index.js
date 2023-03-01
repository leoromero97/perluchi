import { clsx } from "clsx";

function Button({ className, text, isPrimary, isSecondary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-7 py-4 text-lg md:text-xl font-bold rounded-2xl transition-all",
        className,
        isPrimary && "bg-yellow-light hover:bg-yellow-dark text-yellow-black",
        isSecondary &&
          "bg-blue hover:bg-indigo-500 text-yellow-black hover:text-yellow-50"
      )}
    >
      {text}
    </button>
  );
}

export default Button;
