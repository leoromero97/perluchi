import React from "react";
import { PacmanLoader } from "react-spinners";
import { InstagramEmbed } from "react-social-media-embed";
import Layout from "../../components/Layout";

function About() {
  return (
    <Layout>
      <div className="flex flex-col max-w-screen-xl w-full gap-10 py-8 px-4 text-yellow-900 pt-32">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Sobre nosotros
        </h1>
        <div className="flex flex-col md:flex-row w-full gap-16">
          <InstagramEmbed
            url="https://www.instagram.com/reel/CeFBnnYgKWb/?utm_source=ig_web_copy_link"
            placeholderSpinner={<PacmanLoader />}
            width="100%"
            style={{ borderRadius: 20 }}
          />
          <div className="flex flex-col gap-6 w-full text-yellow-900">
            <h2 className="text-yellow-700 text-xl md:text-3xl font-semibold">
              Perluchi Alta Cocina
            </h2>
            <p className="text-xl  font-semibold">
              Comé como en casa 👩‍🍳
            </p>
            <p className="text-bases">
              Nos destacamos en el amor y la pasión que brindamos al cocinar,
              somos un negocio familiar con raíces en Paraguay, y nos enfocamos
              en ofrecer comida casera con una amplia variedad de platos
              disponibles, incluyendo empanadas, hamburguesas, milanesas,
              ensaladas de tomate, huevo, lechuga, zanahoria, legumbres, locro,
              ribs, sopa paraguaya, tartas, pechito de cerdo, papas fritas,
              batata y berenjena.
            </p>
            <p className="text-base">
              Además, nos comprometemos en utilizar ingredientes
              frescos y naturales en todos nuestros platos. Es por eso que priorizamos la
              calidad en cada plato para brindar el mejor servicio y los mejores productos
              a nuestros clientes. Animate a probar, te esperamos.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
