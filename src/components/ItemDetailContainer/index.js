import { useEffect, useState } from "react";
import { getProductById } from "../../utils/getProduct";
import ItemDetail from "../ItemDetail";
import { clsx } from 'clsx';

function ItemDetailContainer({ className, itemId }) {
  const [product, setProducts] = useState();

  useEffect(() => {
    getProductById(itemId).then((res) => setProducts(res));
  }, [itemId]);

  return (
    <div className={clsx('flex gap-6 items-center justify-center max-w-screen-xl w-full py-8', className)}>
      {product && (
        <ItemDetail
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          category={product.category}
          alert={product.alert}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
