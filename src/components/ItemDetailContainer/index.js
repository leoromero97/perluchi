import { useEffect, useState } from "react";
import { getProductById } from "../../utils/getProduct";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer({ itemId }) {
  const [product, setProducts] = useState();

  useEffect(() => {
    getProductById(itemId).then((res) => setProducts(res));
  }, [itemId]);

  return (
    <div className="flex gap-6 flex-wrap items-center justify-center">
      {product && (
        <ItemDetail
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
