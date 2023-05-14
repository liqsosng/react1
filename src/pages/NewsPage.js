import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectNewsById } from "../features/news/newsSlice";
import NewsDetail from "../features/news/NewsDetail";
import CommentsList from "../features/comments/CommentsList";

const NewsPage = () => {
  const { newsId } = useParams();
  const news = selectNewsById(newsId);
  return (
    <Container>
      <Row>
        <NewsDetail news={news} />
        <CommentsList newsId={newsId} />
      </Row>
    </Container>
  );
};
export default NewsPage;
