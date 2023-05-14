import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import { selectAllProducts } from "./productsSlice";

const ProductsList = () => {
  const products = selectAllProducts();
  return (
    <Row className="ms-auto">
      {products.map((product) => {
        return (
          <Col
            md="6"
            className="m-4"
            key={product.id}
            // onClick={() => setProductId(product.id)}
          >
            <ProductCard product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductsList;
