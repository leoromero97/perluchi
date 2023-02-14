import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/home";
import About from "./pages/about";
import Categories from "./pages/categories";
import Contact from "./pages/contact";
import Detail from './pages/detail/index';
import Category from './pages/category/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={`${ROUTES.CATEGORIES}/${ROUTES.CATEGORY}/:categoryId`} element={<Category />} />
        <Route path={`${ROUTES.PRODUCT_DETAIL}/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
