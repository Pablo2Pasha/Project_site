async function loadRSS() {
  const rssURL = "https://rss.app/feeds/r9gfxviVn5igQcYo.xml";
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
      const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
      const imgUrl = imgMatch ? imgMatch[1] : "";
      const textOnly = description.replace(/<img[^>]*>/, ""); 
      const div = document.createElement("div");
      div.className = "news-item";

      div.innerHTML = `
        ${imgUrl ? `<img src="${imgUrl}" class="news-thumb">` : ""}
        <h3>${title}</h3>
        <p class="date">${new Date(pubDate).toLocaleString()}</p>
        <p>${textOnly}</p>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("", error);
  }
}







loadRSS();
