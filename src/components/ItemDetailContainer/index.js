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

function ItemDetailContainer({ className, itemId }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const isError = !itemId || data === undefined;

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

  return (
    <div
      className={clsx(
        "flex gap-6 items-center justify-center max-w-screen-xl w-full py-8",
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
