
function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();

  const searchMap = {
    "літак": "planes.html",
    "літаки": "planes.html",
    "самолёт": "planes.html",
    "ан225": "an225.html",
    "an225": "an225.html",
    "б52": "b52.html",
    "b52": "b52.html",
    "ср71": "sr71.html",
    "sr71": "sr71.html",
    "x15": "x15.html",
    "х15": "x15.html",
    "винищувач": "air-fighters.html",
    "винищувачі": "air-fighters.html",
    "винищувачи": "air-fighters.html",
    "вертоліт": "helicopters.html",
    "вертольоти": "helicopters.html",
    "гелікоптер": "helicopters.html"

  };

  for (const key in searchMap) {
    if (input.includes(key)) {
      window.location.href = searchMap[key];
      return;
    }
  }

  window.location.href = "not-found.html";
}

window.onload = function () {
  const loader = document.getElementById("loader");
  const animationContainer = document.createElement("div");
  animationContainer.style.position = "relative";
  animationContainer.style.width = "100vw";
  animationContainer.style.height = "100vh";
  loader.appendChild(animationContainer);
  const plane = document.createElement("div");
  plane.style.position = "absolute";
  plane.style.width = "80px";
  plane.style.height = "80px";
  plane.style.backgroundImage = 'url("Plane.png")';
  plane.style.backgroundSize = "contain";
  plane.style.backgroundRepeat = "no-repeat";
  plane.style.backgroundPosition = "center";
  plane.style.opacity = "0";
  animationContainer.appendChild(plane);
  setTimeout(() => {
    plane.style.opacity = "1";
    startSpiralFlight();
  }, 500);
  function startSpiralFlight() {
    let angle = 0;
    let radius = 150;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const targetAngle = Math.PI * 2 * 3; 
    function animate() {
      angle += 0.04;
      radius -= 0.05;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      plane.style.left = x - 40 + "px";
      plane.style.top = y - 40 + "px";
      plane.style.transform = `rotate(${angle + Math.PI / 2}rad)`;
      if (angle >= targetAngle) {
        const finalX = centerX + Math.cos(angle) * radius;
        const finalY = centerY + Math.sin(angle) * radius;
        startStraightFlight(finalX, finalY);
        return;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
  function startStraightFlight(startX, startY) {
    let x = startX;
    let y = startY;
    const speed = 3;
    let logoShown = false;
    function animate() {
      x += speed;
      plane.style.left = x - 40 + "px";
      plane.style.top = y - 40 + "px";
      plane.style.transform = "rotate(0rad)";
      if (!logoShown && x > window.innerWidth / 2 + 100) {
        logoShown = true;
        showThanks(x, y);
      }
      if (x < window.innerWidth + 100) {
        requestAnimationFrame(animate);
      } else {
        finish();
      }
    }
    animate();
  }
  function showThanks(x, y) {
    const prv= document.createElement("div");
    prv.style.position = "absolute";
    prv.style.left = x + 50 + "px";
    prv.style.top = y - 10 + "px";
    prv.style.fontSize = "28px";
    prv.style.color = "#2b4584";
    prv.style.fontWeight = "bold";
    prv.style.opacity = "0";
    prv.style.transition = "opacity 2s ease";
    animationContainer.appendChild(prv);
    setTimeout(() => {
      prv.style.opacity = "1";
    }, 300);
  }
    setTimeout(() => {
      title.style.top = "100px";
      title.style.opacity = "1";
    }, 500);
  }
  function showLogo() {
  const title = document.createElement("div");
  title.textContent = "airPlanesHistory.com";
  title.style.position = "absolute";
  title.style.top = "-50px";
  title.style.left = "50%";
  title.style.transform = "translateX(-50%)";
  title.style.fontSize = "36px";
  title.style.color = "#2b4584";
  title.style.fontWeight = "bold";
  title.style.opacity = "0";
  title.style.transition = "top 1s ease, opacity 1s ease";
  loader.appendChild(title);
  setTimeout(() => {
    title.style.top = "100px";
    title.style.opacity = "1";
  }, 500);
}
  function finish() {
    showLogo();
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.remove();
        document.querySelector(".header").style.opacity = "1";
        document.querySelector(".main-section").style.opacity = "1";
      }, 800);
    }, 2000);
  }
