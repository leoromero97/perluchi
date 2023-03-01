import { useEffect, useState } from "react";
import CATEGORIES_MOCK from "../../mocks/categories.json";
import Layout from "../../components/Layout";
import { getCategories } from '../../utils/getCategories';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../constants/routes";

function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories(CATEGORIES_MOCK).then((res) => setCategories(res));
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-medium text-amber-700">Categorias</h1>
      <div className="flex gap-6 flex-wrap items-center justify-center">
      {categories &&
        categories.map((category) => {
          return (
            <Link to={`${ROUTES.CATEGORY}/${category.categoryId}`} key={category.categoryId}>
              <div className="border border-yellow-800 flex flex-col items-center gap-4 rounded-2xl p-6">
                <img src={category.icon} alt={`Icono categoria ${category.name}`} className="h-9 w-9" />
                <p>{category.name}</p>
              </div>
            </Link>
          );
        })}
    </div>
    </Layout>
  );
}

export default Categories;
