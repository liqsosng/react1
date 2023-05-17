import { formatDate } from "../../utils/formatDate";

const Comment = ({ comment }) => {
  const { content: commentText, author, timestamp } = comment;
  return (
    <p>
      {commentText}
      <br />
      {author},{formatDate(timestamp)}
    </p>
  );
};

export default Comment;
