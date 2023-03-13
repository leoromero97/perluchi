import React from "react";
import Banner from "../../components/Banner/index";
import ItemListContainer from "../../components/ItemListContainer";
import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout>
      <Banner
        title="Perluchi, pasión por la cocina"
        subtitle="Date el gusto y conocé los mejores platos de la ciudad"
        buttonText="Realizar pedido" 
        className="mb-20 pt-16"
      />
      <ItemListContainer title="Menú" className="mb-20" />
    </Layout>
  );
}

export default Home;
