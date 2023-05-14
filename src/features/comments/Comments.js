import { formatDate } from "../../utils/formatDate";

const Comments = ({ comment }) => {
  const { content: commentText, author, timestamp } = comment;
  return (
    <p>
      {commentText}
      <br />
      {author},{formatDate(timestamp)}
    </p>
  );
};

export default Comments;
