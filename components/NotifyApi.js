//https://news-mobile-app.herokuapp.com/api/notify/token/ExponentPushToken[xNnXzwHtO8LbX_qy8ot5Ec-2]
//const url ="http://localhost:5000/api/category";
const url ="https://news-mobile-app.herokuapp.com/api/notify/token/ExponentPushToken[xNnXzwHtO8LbX_qy8ot5Ec-2]";

export async function getNotify() {
  //console.log('fetch')
  let result = await fetch(url).then(response => response.json());
  //console.log(result)
  return result;
}