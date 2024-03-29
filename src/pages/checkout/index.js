import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Error from "../../components/Error";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import OrderForm from "../../components/OrderForm";
import OrderSummary from "../../components/OrderSummary";
import Toast from "../../components/Toast";
import { ROUTES } from "../../constants/routes";
import { db } from "../../firebase/config";
import useCart from "../../hooks/cart/useCart";
import orderConfirmedVector from "../../assets/vc-undraw_order_confirmed.svg";
import vectorEmptyCart from "../../assets/vc-undraw_empty_cart.svg";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  paymentMethod: "",
  email: "",
  emailValidate: "",
  orderSummary: {},
};

function CheckoutPage() {
  const [values, setValues] = useState(initialValues);
  const [orderId, setOrderId] = useState("");
  const [errorValidation, setErrorValidation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { total, products, clearCartTotal, clearProductsCart } = useCart();
  const date = new Date();
  const dateOrder = `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()} hs`;
  const messageOrder = `Hola Perluchi! realicé un pedido, mi número de orden es: ${orderId}`;
  const productOverview = products.map((product) => ({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  }));

  const orderSummary = {
    totalPrice: total.totalPrice.toLocaleString(),
    productsQuantity: total.productQuantity,
    products: productOverview,
    date: dateOrder,
  };

  const handlePaymentMethodChange = (newPaymentMethod) => {
    setPaymentMethod(newPaymentMethod);
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value, orderSummary, paymentMethod });
    console.log('Formulario', values);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (values.email !== values.emailValidate) {
      setErrorValidation(true);
      return;
    }
    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    setOrderId(docRef.id);
    clearCartTotal();
    clearProductsCart();
    setValues(initialValues);
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-screen-xl w-full gap-10 py-8 px-4 text-yellow-900 pt-32 items-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          {orderId ? "Finalizaste tu compra" : "Completá tu compra"}
        </h1>
        {orderId && (
          <div className="flex flex-col gap-12 items-center">
            <img
              src={orderConfirmedVector}
              alt="Vector de orden confirmada"
              className="h-64"
            />
            <p className="text-lg text-yellow-900">
              Si queres consultar el estado de tu pedido, anotá el siguiente
              número de orden de la compra
            </p>
            <Toast isInfo message={`Tu número de orden es: ${orderId}`} />
            <Button
              messageOrderExternal={messageOrder}
              isPrimary
              text="Consultar pedido"
            />
            <Button to={ROUTES.HOME} isTertiary text="Ver más productos" />
          </div>
        )}
        {products && total.productQuantity > 0 && !orderId && (
          <div className="flex flex-col md:flex-row bg-white w-full border-2 rounded-2xl p-4 gap-10 md:gap-20 md:justify-between">
            <OrderForm
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
              onPaymentMethodChange={handlePaymentMethodChange}
              values={values}
              errorValidationEmail={errorValidation}
              className="md:w-130 order-2 md:order-1"
            />
            {total.productQuantity !== 0 && (
              <OrderSummary
                productQuantity={total.productQuantity}
                totalPrice={total.totalPrice}
                className="md:w-134 md:order-2"
              />
            )}
          </div>
        )}
        {!orderId && total.productQuantity === 0 && (
          <Error
            message="Aún no tenés productos en tu carrito, agregalos para disfrutar del mejor sabor"
            image={vectorEmptyCart}
            imageClassName="h-64"
          />
        )}
      </div>
    </Layout>
  );
}

export default CheckoutPage;
