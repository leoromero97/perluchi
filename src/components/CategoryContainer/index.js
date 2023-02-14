import PRODUCTS_MOCK from "../../mocks/products.json";
import CATEGORIES_MOCK from "../../mocks/categories.json";
import ItemList from "../ItemList";
import { useEffect, useState } from 'react';

function CategoryContainer({ categoryId }) {
  const [productsByCategory, setProductsByCategory] = useState();
  const [currentCategory, setCurrentCategory] = useState();

  useEffect(() => {
    setProductsByCategory(PRODUCTS_MOCK.filter(
      (product) => product.categoryId === categoryId
    ))
    setCurrentCategory(CATEGORIES_MOCK.find(
      (category) => category.categoryId === categoryId
    ))
  }, [categoryId])

  return (
    <div className="flex gap-6 flex-col items-center justify-center">
      <span className="text-sm">{'Categorias > '} <span className="font-bold text-sm">{currentCategory?.name}</span></span>
      {productsByCategory && <ItemList items={productsByCategory} />}
    </div>
  );
}

export default CategoryContainer;
