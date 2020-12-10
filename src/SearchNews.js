

export default async function searchNews(q) {
    q = encodeURIComponent(q);
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "c2bcbc1e61msh86852083bdca810p1553c1jsn723d8163fad4",
        "x-bingapis-sdk": "true"
      }
    });
    const body = await response.json();
    return body.value;
  }
  