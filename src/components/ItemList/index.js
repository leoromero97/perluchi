import Item from "../Item";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function ItemList({ items }) {
  return (
    <div className="flex gap-6 flex-wrap items-center justify-center">
      {items &&
        items.map((product) => {
          return (
            <Link to={`${ROUTES.PRODUCT_DETAIL}/${product.id}`} key={product.id}>
              <Item
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default ItemList;
