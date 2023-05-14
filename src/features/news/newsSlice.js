import { NEWS } from "../../app/shared/NEWS.js";

export const selectAllNews = () => {
  return NEWS;
};

// export const selectNewsById = (id) => {
//   return NEWS.find((news) => news.id === parseInt(id));
// };
export const selectNewsById = (id) => {
  return NEWS.find((news) => news.id == id);
};

export const selectFeaturedNews = () => {
  return NEWS.filter((news) => news.featured);
};
