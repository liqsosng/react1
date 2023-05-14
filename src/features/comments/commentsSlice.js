import { COMMENTS } from "../../app/shared/COMMENTS.js";

export const selectCommentsBynewsId = (newsId) => {
  return COMMENTS.filter((comment) => comment.newsId === parseInt(newsId));
};
