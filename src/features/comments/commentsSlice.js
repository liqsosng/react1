import { COMMENTS } from "../../app/shared/COMMENTS.js";

export const selectCommentsByNewsId = (newsId) => {
  return COMMENTS.filter((comment) => comment.newsId === parseInt(newsId));
};
