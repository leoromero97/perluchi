import Button from "../Button";
import Breadcrumb from "../Breadcrumb";
import Chip from "../Chip";
import { ROUTES } from "../../constants/routes";
import useCart from "../../hooks/cart/useCart";
import imagePlaceholder from "../../assets/image-placeholder.png";

function ItemDetail({
  categoryLabel = "",
  description = "",
  id = "",
  ingredients = [],
  image,
  name = "",
  price = 0,
  note = "",
  onAddProduct
}) {
  const { addProduct } = useCart();
  const percentaje = 0.4;
  const lastPrice = price * percentaje + Number(price);
  const product = {
    name: name,
    price: price,
    id: id,
    imageUrl: image,
  };
  const messageOrder = `Hola Perluchi, quisiera pedir ${name}, con el valor de $${price}`;
  const breadcrumbItems = [
    { label: "Inicio", slug: ROUTES.HOME },
    { label: categoryLabel, slug: `${ROUTES.CATEGORY}/${categoryLabel}` },
    { label: name, slug: "" },
  ];

  const handleOnClick = () => {
    addProduct({ ...product, quantity: 1 });
    onAddProduct();
  };

  return (
    <div
      key={id}
      className="flex-col bg-white flex w-full border-2 rounded-2xl p-4 gap-10"
    >
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex w-full flex-col md:flex-row gap-4">
          <div className="h-96 w-full">
            <img
              src={image || imagePlaceholder}
              alt="Imagen del producto"
              className="h-full w-full object-cover rounded-md "
            />
          </div>
        <div className="flex flex-col px-6 gap-4 w-full justify-between text-yellow-900">
          <div className="flex items-center gap-6">
            {note && <Chip label={note} />}
          </div>
          {name && <p className="text-xl md:text-3xl font-bold">{name}</p>}
          <span className="text-sm text-gray-500 line-through">Antes: ${lastPrice.toLocaleString()}</span>
          {price && <span className="text-3xl md:text-5xl font-medium">${price.toLocaleString()}</span>}
          <div className="flex flex-col gap-6 items-center">
            <Button
              isButton
              isSecondary
              text="Agregar al carrito"
              className="w-full"
              onClick={handleOnClick}
            />
            <Button
              isTertiary
              text="Pedir ahora"
              className="w-full"
              messageOrderExternal={messageOrder}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl md:text-3xl font-bold text-yellow-700">Descripción</p>
        <p className="text-base text-yellow-900">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl md:text-3xl font-bold text-yellow-700">Ingredientes</p>
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="text-base text-yellow-900 list-disc">
            {ingredient}
          </li>
        ))}
      </div>
      <Button
        isTertiary
        to={ROUTES.HOME}
        text="Ver más productos"
        className="self-center"
      />
    </div>
  );
}

export default ItemDetail;
