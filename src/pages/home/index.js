import React from 'react'
import ItemListContainer from "../../components/ItemListContainer";
import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout>
      <ItemListContainer title="Lista de productos" />
    </Layout>
  );
}

export default Home;
