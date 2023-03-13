import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer";
import Layout from "../../components/Layout/index";

function Detail() {
  const { id } = useParams();
  return (
    <Layout>
      <ItemDetailContainer itemId={id} className="pt-32" />
    </Layout>
  );
}

export default Detail;
