const url ="http://articles-fullstack.herokuapp.com/api/articles?category=";

export async function getNews(cat) {
  let result = await fetch(url+cat).then(response => response.json());
 console.log(result)
  return result;
}