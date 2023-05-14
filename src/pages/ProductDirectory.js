import { Container, Row, Col } from "reactstrap";
import ProductsList from "../features/product/ProductsList";
// import ProductDetail from "../features/product/ProductDetail";
// import ProductsList from "../features/product/ProductsList";
// import { useState } from "react";
// import { selectProductById } from "../features/product/productsSlice";

const ProductDirectory = () => {
  // const [productId, setProductId] = useState(0);
  // const selectedProduct = selectProductById(productId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <ProductsList />
        </Col>
        {/* <Col sm="7" md="5">
          <ProductDetail product={selectedProduct} />
        </Col> */}
      </Row>
    </Container>
  );
};

export default ProductDirectory;
