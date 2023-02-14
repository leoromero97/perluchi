function ItemDetail({image, name, price, category}) {
  return (
    <div className="flex">
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

export default ItemDetail;
