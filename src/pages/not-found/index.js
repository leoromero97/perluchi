import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { ROUTES } from "../../constants/routes";
import vectorErrorNotFound from "../../assets/vc-undraw_not_found_re_bh2e.svg"

function NotFoundPage() {
  return (
    <Layout>
      <div className="flex flex-col max-w-xl w-full gap-10 py-8 px-4 text-yellow-900 pt-32">
      <img src={vectorErrorNotFound} alt="Icono del error" className="h-64" />
        <h1 className="text-xl md:text-3xl font-semibold text-center">
          La pagina que buscas no se encuentra o no está dentro de la
          plataforma.
        </h1>
        <Button text="Volver al Inicio" isPrimary to={ROUTES.HOME} />
      </div>
    </Layout>
  );
}

export default NotFoundPage;
