const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score");
let score = 0;

var objs = new Array("assets/gopher.png", "assets/bomb.png");

const sound = new Audio("assets/smash.mp3");

function peep() {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;

  const img = document.createElement("img");

  const randN = Math.floor(Math.random() * objs.length);
  const obj = objs[randN];

  img.classList.add("obj");
  img.src = obj;

  img.addEventListener("click", () => {
    if (obj[randN] == obj[0]) {
      score += 10;
      sound.play();
      scoreEl.textContent = score;
      img.src = "assets/dead_gopher.png";
    }
    if (obj[randN] == obj[1]) {
      score += 5;
      sound.play();
      scoreEl.textContent = score;
      img.src = "assets/explode.png";
    }
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(img);
      peep();
    }, 500);
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    peep();
  }, 1500);
}

function startGame() {
  peep();
}

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});

function resetGame() {
  document.getElementsByClassName("score").reset();
}
