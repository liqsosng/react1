import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";

const DisplayCard = ({ item }) => {
  const { image, name, description } = item;
  return (
    <Card>
      <CardHeader color="primary">
        <CardImg className="hero" src={image} alt={name} />
      </CardHeader>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
