async function loadRSS() {
  const rssURL = "https://tsn.ua/rss/all.xml";
  const proxyURL = "https://corsproxy.io/?";
  try {
    const response = await fetch(proxyURL + encodeURIComponent(rssURL));
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    const items = xml.querySelectorAll("item");
    const container = document.getElementById("news");
    container.innerHTML = "";
    items.forEach((item, index) => {
      if (index >= 6) return;
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const pubDate = item.querySelector("pubDate").textContent;
      const description = item.querySelector("description").textContent;
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <h3>${title}</h3>
        <p class="date">${new Date(pubDate).toLocaleString()}</p>
        <p>${description}</p>
        <a href="${link}" target="_blank">Читати більше</a>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("ошибка ЛОООООООООООООЛ", error); 
  }       
}
loadRSS()
