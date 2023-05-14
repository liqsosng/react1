import { selectAllNews, selectFeaturedNews } from "./newsSlice";
import NewsCard from "./NewsCard";
import { Col, Row } from "reactstrap";

const NewsList = () => {
  const news = selectFeaturedNews();
  return (
    <Row className="ms-auto">
      {news.map((news) => {
        return (
          <Col
            md="5"
            className="m-4"
            key={news.id}
            // onClick={() => setProductId(product.id)}
          >
            <NewsCard news={news} />
          </Col>
        );
      })}
    </Row>
  );
};

export default NewsList;
