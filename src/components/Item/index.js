function Item ({ name, price, category, image}) {
  return (
    <div className="border border-yellow-800 flex flex-col rounded-2xl h-96 w-60 hover:bg-orange-300">
      {image && (
        <div className="h-60">
          <img src={image} alt="Imagen del producto" className="h-full w-full object-cover rounded-2xl rounded-b-md" />
        </div>
        )}
      <div className="flex flex-col p-2 gap-2">
        <p className="text-lg font-bold">{name}</p>
        <span className="text-xs">{`$${price}`}</span>
        <span className="text-base">{category}</span>
      </div>
    </div>
  );
}

export default Item;
