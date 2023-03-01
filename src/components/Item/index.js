import Chip from "../Chip";

function Item ({ name, price, image, alert}) {
  return (
    <div className="bg-white hover:bg-yellow-gray-default shadow-sm hover:shadow-lg transition-all flex flex-col rounded-2xl h-96 w-72">
      {image && (
        <div className="h-60">
          <img src={image} alt="Imagen del producto" className="h-full w-full object-cover rounded-2xl rounded-b-md" />
        </div>
        )}
      <div className="flex flex-col p-2 gap-2 text-yellow-black">
        <p className="text-lg font-bold">{name}</p>
        <span className="text-base font-semibold">{`$${price}`}</span>
        {alert && <Chip label={alert.message} type={alert.type} />}
      </div>
    </div>
  );
}

export default Item;
