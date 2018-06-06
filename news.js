const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=98fcfeaaeefe44b98e8e7bd15da540e3";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
