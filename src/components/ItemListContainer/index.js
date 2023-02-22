import { useEffect, useState } from "react";
import PRODUCTS_MOCK from "../../mocks/products.json";
import CATEGORIES_MOCK from "../../mocks/categories.json";
import { getProducts } from "../../utils/getProducts";
import ItemList from "../ItemList";
import Chip from "../Chip";
import { clsx } from "clsx";

function ItemListContainer({ className, title }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts(PRODUCTS_MOCK).then((res) => setProducts(res));
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-16 max-w-screen-xl",
        className
      )}
    >
      <h2 className="text-5xl font-semibold text-yellow-black">{title}</h2>
      <div className="flex items-center gap-2 md:gap-16 overflow-x-scroll md:overflow-hidden">
        {CATEGORIES_MOCK &&
          CATEGORIES_MOCK.map((category) => (
            <Chip
              key={category.categoryId}
              label={category.name}
              type="CATEGORY"
            />
          ))}
      </div>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
