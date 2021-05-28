const news_wrapper = document.getElementById("newsWrapper");

const getNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2021-05-27&to=2021-05-27&sortBy=popularity&apiKey=0ea3ccbe32ed4765bdff11227a5e9483`;
    const response = await fetch(url);
    const responseData = await response.json();
    createNewsCards(responseData);
}

const createNewsCards = news => {
    for (let i = 0; i <20; i++) {
        const newsCard = document.createElement('div');
        newsCard.classList.add("newsCard");
        newsCard.innerHTML = ` <div class="card mb-3">
        <img src="${news.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${news.articles[i].title}</h5>
          <p class="card-text">${news.articles[i].description}</p>
          <a href="${news.articles[i].url}" class="stretched-link"></a>
          </div>
      </div>
      `
        news_wrapper.appendChild(newsCard);
    }
}

getNews();