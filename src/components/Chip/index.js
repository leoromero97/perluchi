import clsx from "clsx";

function Chip({ label = "" }) {
  const isRecommended = label === "Recomendado";
  const isBestSeller = label === "Más vendido";
  const isNew = label === "Nuevo";

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-fit py-2 px-4 rounded-full",
        isRecommended && "bg-yellow-default",
        isBestSeller && "bg-blue",
        isNew && "bg-green"
      )}
    >
      <span className="text-xs md:text-sm font-semibold">{label}</span>
    </div>
  );
}

export default Chip;
