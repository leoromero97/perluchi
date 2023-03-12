import React from "react";
import { useParams } from 'react-router-dom';
import CategoryContainer from '../../components/CategoryContainer';
import Layout from '../../components/Layout/index';

function Category() {
  const { categoryLabel } = useParams();
  return (
    <Layout>
      <CategoryContainer categoryLabel={categoryLabel} />
    </Layout>
  )
}

export default Category;
