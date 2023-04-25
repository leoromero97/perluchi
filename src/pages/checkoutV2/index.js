import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import icWhatsApp from "../../assets/ic-whatsapp.svg";
import vectorEmptyCart from "../../assets/vc-undraw_empty_cart.svg";
import orderConfirmedVector from "../../assets/vc-undraw_order_confirmed.svg";
import Error from "../../components/Error";
import Layout from "../../components/Layout";
import OrderForm from "../../components/OrderForm";
import OrderSummary from "../../components/OrderSummary";
import Popup from "../../components/Popup";
import { ROUTES } from "../../constants/routes";
import useCart from "../../hooks/cart/useCart";

function CheckoutPage() {
  const initialValues = {
    name: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "",
    deliveryChannel: "",
    orderSummary: {},
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [orderId, setOrderId] = useState("");
  const [paymentMethodCart, setPaymentMethodCart] = useState("");
  const [deliveryChannelCart, setDeliveryChannelCart] = useState("");
  const [openedModal, setOpenedModal] = useState(false);
  const { total, products, clearCartTotal, clearProductsCart } = useCart();
  const emptyCart = total.productQuantity === 0;
  const date = new Date();
  const dateOrder = `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()} hs`;
  const { name, paymentMethod, deliveryChannel, orderSummary } = values;
  const productsCustomMessage = orderSummary?.products?.map(
    (product) =>
      `- ${
        product?.quantity > 1
          ? `${product?.quantity} unidades`
          : `${product?.quantity} unidad`
      } de ${product?.name}\n`
  );
  const messageOrder = `Hola Perluchi! Mi nombre es *${name}*, realicé un pedido en la fecha y hora *${
    orderSummary.date
  }* y mi número de orden es: *${orderId}*.\n
  ${
    productsCustomMessage ? `Lo que pedi es:\n *${productsCustomMessage}*.` : ""
  }\n
  Mi pedido lo solicité para: *${deliveryChannel}*.\n
  El método de pago es: *${paymentMethod}*.\n
  El total a abonar es: *$${orderSummary.totalPrice}*`;
  const productOverview = products.map((product) => ({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  }));

  const orderSummaryCart = {
    totalPrice: total.totalPrice.toLocaleString(),
    productsQuantity: total.productQuantity,
    products: productOverview,
    date: dateOrder,
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
      orderSummary: orderSummaryCart,
      paymentMethod: paymentMethodCart,
      deliveryChannel: deliveryChannelCart,
    });
  };

  const handleDeliveryChannelChange = (newDeliveryChannel) => {
    setDeliveryChannelCart(newDeliveryChannel);
    setValues({ ...values, deliveryChannel: newDeliveryChannel });
  };

  const handlePaymentMethodChange = (newPaymentMethod) => {
    setValues({ ...values, paymentMethod: newPaymentMethod });
    setPaymentMethodCart(newPaymentMethod);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    setOrderId(docRef.id);
    setOpenedModal(true);
  };

  const onOrderConfirm = () => {
    clearCartTotal();
    clearProductsCart();
    setValues(initialValues);
    navigate(ROUTES.HOME);
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-screen-xl w-full gap-10 py-8 px-4 text-yellow-900 pt-32 items-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          {orderId
            ? "Confirmaste tus datos"
            : emptyCart
            ? "Agregá productos"
            : "Completá tu compra"}
        </h1>
        {orderId && (
          <img
            src={orderConfirmedVector}
            alt="Vector de orden confirmada"
            className="h-64 mt-6"
          />
        )}
        {products && total.productQuantity > 0 && !orderId && (
          <div className="flex flex-col md:flex-row bg-white w-full border-2 rounded-2xl p-4 gap-10 md:gap-20 md:justify-between">
            <OrderForm
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
              onPaymentMethodChange={handlePaymentMethodChange}
              onDeliveryChange={handleDeliveryChannelChange}
              values={values}
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
        {!orderId && emptyCart && (
          <Error
            message="Aún no tenés productos en tu carrito, agregalos para disfrutar del mejor sabor"
            image={vectorEmptyCart}
            imageClassName="h-64"
          />
        )}
      </div>
      {openedModal && (
        <Popup
          messageOrder={messageOrder}
          text={`Para finalizar con tu pedido te pedimos que nos confirmes por WhatsApp o podés anotar tu número de orden: ${orderId}`}
          textButton="Confirmar pedido"
          iconButton={{ src: icWhatsApp, alt: "Icon WhatsApp" }}
          title="Confirmá tu pedido"
          onClick={onOrderConfirm}
          secondTextButton="Ir al inicio"
        />
      )}
    </Layout>
  );
}

export default CheckoutPage;
