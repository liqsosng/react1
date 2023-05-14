import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectProductById } from "../features/product/productsSlice";
import ProductDetail from "../features/product/ProductDetail";

const ProductPage = () => {
  const { productId } = useParams();
  const product = selectProductById(productId);

  return (
    <Container>
      <Row>
        <ProductDetail product={product} />
      </Row>
    </Container>
  );
};

export default ProductPage;
