import { Container, Row } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import NewsList from "../features/news/NewsList";

const Home = () => {
  return (
    <Container>
      <Row>
        <h2>Top news</h2>
        <NewsList />
      </Row>
      <Row>
        <h2>Featured product</h2>
        <DisplayList />
      </Row>
    </Container>
  );
};

export default Home;
