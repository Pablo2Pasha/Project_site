window.onload = function() {
    const loader = document.getElementById("loader");
    const plane = document.getElementById("plane");
    setTimeout(() => {
        plane.style.width = "80px";
        plane.style.height = "20px";
        plane.style.background = "#0094ff";
        plane.style.borderRadius = "10px 5px 5px 5px";
    }, 1000);
    setTimeout(() => {
        plane.style.transform = "translateX(300px) rotate(20deg)";
        plane.style.opacity = "0";
        const text = document.createElement("div");
        text.textContent = "хзчозасайт.ком";
        text.style.position = "absolute";
        text.style.fontSize = "24px";
        text.style.color = "#2b4584";
        text.style.fontWeight = "bold";
        text.style.opacity = "0";
        text.style.transition = "opacity 1s ease";
        loader.appendChild(text);
        setTimeout(() => {
            text.style.opacity = "1";
        }, 500);
    }, 2000);
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.remove();
            document.querySelector(".header").style.opacity = "1";
            document.querySelector(".main-section").style.opacity = "1";
        }, 500);
    }, 3500);
};