import { Card, CardImg, CardText, CardBody, Col, CardTitle } from "reactstrap";

const NewsDetail = ({ news }) => {
  const { title, image, description, date } = news;
  return (
    <Col>
      <Card>
        <CardImg top src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardBody>
          <CardText>{description}</CardText>
          <CardText>{date}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default NewsDetail;
