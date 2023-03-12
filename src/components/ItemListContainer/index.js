import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { collection, query, getDocs } from "firebase/firestore";
import { PacmanLoader } from "react-spinners";
import ItemList from "../ItemList";
import { db } from "../../firebase/config";

function ItemListContainer({ className, title }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const q = query(collection(db, "perluchiFood"));
      const querySnapshot = await getDocs(q);
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      setData(products);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-16 max-w-screen-xl",
        className
      )}
    >
      <h1 className="text-5xl font-semibold text-yellow-900">{title}</h1>
      {isLoading ? <PacmanLoader color="#40372B" /> : <ItemList items={data} />}
    </div>
  );
}

export default ItemListContainer;
