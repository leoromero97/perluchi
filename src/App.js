import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { CartProvider } from "./context/cartContext";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Detail from "./pages/detail/index";
import Category from "./pages/category/index";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import CheckoutPage2 from "./pages/checkoutV2";
import NotFoundPage from "./pages/not-found";

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route
              path={`${ROUTES.CATEGORY}/:categoryLabel`}
              element={<Category />}
            />
            <Route path={`${ROUTES.PRODUCT_DETAIL}/:id`} element={<Detail />} />
            <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
            <Route path="/checkoutV2" element={<CheckoutPage2 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
