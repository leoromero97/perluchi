import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { PacmanLoader } from "react-spinners";
import Error from "../Error";
import ItemDetail from "../ItemDetail";
import { db } from "../../firebase/config";
import vectorErrorSearch from "../../assets/vc-undraw_web_search_re_efla.svg";
import useCart from "../../hooks/cart/useCart";
import Toast from "../Toast";
import Button from "../Button";
import { ROUTES } from "../../constants/routes";
import icCart from "../../assets/ic-shopping-cart.svg";
import { baseButtonStyle } from "../Button/constants";

function ItemDetailContainer({ className, itemId }) {
  const { products, total } = useCart();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const isError = !itemId || data === undefined;
  const formattedPrice = `$${total.totalPrice.toLocaleString()}`;

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const q = query(
        collection(db, "perluchiFood"),
        where(documentId(), "==", itemId)
      );
      const querySnapshot = await getDocs(q);
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });

      setData(products[0]);
      setIsLoading(false);
    };
    getProducts();
  }, [itemId]);

  const productQuantity = products
    .filter((product) => product?.id === data?.id)
    .map((product) => product.quantity)[0];

  const textUnits = productQuantity === 1 ? " unidad" : " unidades";
  const productMessage = `Agregaste ${productQuantity} ${textUnits}`;
  const [addedProduct, setAddedProduct] = useState(false);
  const handleAddProduct = () => {
    setAddedProduct(true);
    setTimeout(() => {
      setAddedProduct(false);
    }, 3000);
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-6 items-center justify-center max-w-screen-xl w-full py-8",
        className
      )}
    >
      {isLoading && <PacmanLoader color="#40372B" />}
      {!isLoading && !isError && (
        <ItemDetail
          image={data?.imageUrl}
          name={data?.name}
          id={data?.id}
          categoryLabel={data?.categoryLabel}
          price={data?.price}
          description={data?.description}
          ingredients={data?.ingredients}
          note={data?.note}
          onAddProduct={handleAddProduct}
        />
      )}
      {addedProduct && (
        <Toast isSuccess message={productMessage} className="absolute top-36" />
      )}
      {total.productQuantity !== 0 && (
        <Button
          to={ROUTES.CART}
          text={`Ver carrito (${formattedPrice})`}
          className={clsx('fixed bottom-32 md:w-full md:max-w-7xl shadow-md bg-yellow-default hover:bg-yellow-300', baseButtonStyle)}
          icon={{ src: icCart, alt: 'Ícono carrito', }}
        />
      )}
      {isError && !isLoading && (
        <Error
          message="El producto que buscas no se encuentra disponible"
          image={vectorErrorSearch}
          imageClassName="h-64"
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
