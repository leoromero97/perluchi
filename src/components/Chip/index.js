import { clsx } from "clsx";

function Chip({ label, type }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-fit py-2 px-4 rounded-full",
        type === "CATEGORY" && 'bg-yellow-mid',
        type === "ALERT" && "bg-red",
        type === 'PROMOTION' && "bg-green"
      )}
    >
      <span className="text-xs md:text-sm font-semibold">{label}</span>
    </div>
  );
}

export default Chip;
