document.addEventListener("DOMContentLoaded", function () {
  function createPetal(){
    const petals = document.getElementById("petals");

    if (!petals) return;

    const petal = document.createElement("span");

    petal.className = "petal";
    petal.innerText = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 5) + "s";
    petal.style.fontSize = (12 + Math.random() * 10) + "px";

    petals.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 11000);
  }

  setInterval(createPetal, 900);
});