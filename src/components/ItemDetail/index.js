import Button from "../Button";
import Chip from "../Chip/index";

function ItemDetail({ image, name, price, category, alert }) {
  const lastPrice = price + price * 0.4;
  const handleOnClick = () => console.log("Agregando al carrito..");
  return (
    <div className="flex-col bg-white flex w-full border-2 rounded-2xl p-4 gap-20">
      <div className="flex w-full flex-col md:flex-row gap-4">
        {image && (
          <div className="h-96 w-full">
            <img
              src={image}
              alt="Imagen del producto"
              className="h-full w-full object-cover rounded-md "
            />
          </div>
        )}
        <div className="flex flex-col px-6 gap-2 w-full justify-between text-yellow-black">
          <div className="flex items-center gap-6">
            <Chip label={category} type="CATEGORY" />
            {alert && <Chip label={alert?.message} type={alert?.type} />}
          </div>
          <p className="text-3xl font-bold">{name}</p>
          <span className="text-sm text-gray-400">Antes: ${lastPrice}</span>
          <span className="text-5xl font-medium">$ {price}</span>
          <div className="flex flex-col gap-6 items-center">
            <Button isPrimary text="Agregar al carrito" className="w-full"  onClick={handleOnClick} />
            <Button isSecondary text="Pedir ahora" className="w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-bold">Descripción</p>
        <p className="text-base text-yellow-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default ItemDetail;
