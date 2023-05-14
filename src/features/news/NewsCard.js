import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { id, image, title } = news;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={title} />
        <CardImgOverlay>
          <CardTitle>{title}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default NewsCard;
