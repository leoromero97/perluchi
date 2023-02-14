import { useEffect, useState } from "react";
import PRODUCTS_MOCK from "../../mocks/products.json";
import { getProducts } from "../../utils/getProducts";
import ItemList from "../ItemList";

function ItemListContainer({title}) {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts(PRODUCTS_MOCK).then((res) => setProducts(res));
  }, []);
  
  return (
    <div className="flex flex-col items-center gap-8 max-w-screen-xl p-4">
      <h2 className="text-4xl font-medium text-amber-700">{title}</h2>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
