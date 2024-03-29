import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByNewsId } from "./commentsSlice";

const CommentsList = ({ newsId }) => {
  const comments = selectCommentsByNewsId(newsId);
  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </Col>
    );
  }
  return (
    <Col md="5" className="m-1">
      no comment.
    </Col>
  );
};

export default CommentsList;
