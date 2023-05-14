import { Card, CardImg, CardText, CardBody, Col, CardTitle } from "reactstrap";

const ProductDetail = ({ product }) => {
  const { name, image, description } = product;

  return (
    <Col>
      <Card>
        <CardImg top src={image} alt={name} />

        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDetail;
