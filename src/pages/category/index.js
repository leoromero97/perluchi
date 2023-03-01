import { useParams } from 'react-router-dom';
import CategoryContainer from '../../components/CategoryContainer';
import Layout from '../../components/Layout/index';

function Category() {
  const { categoryId } = useParams();
  return (
    <Layout>
      <CategoryContainer categoryId={categoryId} />
    </Layout>
  )
}

export default Category;
