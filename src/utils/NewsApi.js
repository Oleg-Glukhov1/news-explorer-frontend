import { NEWS_URL, API_KEY } from "./utils";
let now = new Date();

const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10);

const checkResponse = (response) =>
  response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);

const getArticles = (keyword) => {
  return fetch(`${NEWS_URL}q=${keyword}&apiKey=${API_KEY}&from=${finishDate}}&to=${startDate}&sortBy=publishedAt&pageSize=100`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
export { getArticles };
