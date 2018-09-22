
//const url ="http://localhost:5000/api/category";
const url ="https://news-mobile-app.herokuapp.com/api/categorys";

export async function getCategory() {
  //console.log('fetch')
  let result = await fetch(url).then(response => response.json());
  //console.log(result)
  return result;
}
