
const url ="https://news-mobile-app.herokuapp.com/api/article/all";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
 //console.log(result)
  return result;
}
