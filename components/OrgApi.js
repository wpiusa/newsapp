const url ="https://news-mobile-app.herokuapp.com/api/org/all";

export async function getOrg() {
   let result = await fetch(url).then(response => response.json());
   return result;
}
