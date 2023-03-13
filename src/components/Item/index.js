import Chip from "../Chip";
import imagePlaceholder from "../../assets/image-placeholder.png";

function Item({ name, price, image, note }) {
  return (
    <div className="bg-white hover:bg-yellow-gray-default shadow-sm hover:shadow-lg transition-all flex flex-col rounded-2xl h-96 w-72">
      <div className="h-60">
        <img
          src={image || imagePlaceholder}
          alt="Imagen del producto"
          className="h-full w-full object-cover rounded-2xl rounded-b-md"
        />
      </div>
      <div className="flex flex-col p-2 gap-2">
        <p className="text-lg font-bold text-yellow-700">{name}</p>
        <span className="text-base font-semibold text-yellow-900">{`$${price}`}</span>
        {note && <Chip label={note} />}
      </div>
    </div>
  );
}

export default Item;
