const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score");
let score = 0;

var objs = new Array("assets/gopher.png", "assets/bomb.png");

const sound = new Audio("assets/smash.mp3");

function gameOver() {
  // const bombBlast =

  document.getElementById("game").style.filter = "blur(50px)";
  document.getElementById("game").style.backdropFilter = "blur(50px)";

  document.getElementById("homebtns").style.filter = "blur(50px)";
  document.getElementById("homebtns").style.backdropFilter = "blur(50px)";

  document.getElementById("gameover").style.display = "block";
  document.getElementById("gameover").style.zIndex = "1001";
  document.getElementById("gameover").style.position = "fixed";
  document.getElementById("gameover").style.top = "30%";
  document.getElementById("gameover").style.left = "50%";
  document.getElementById("gameover").style.transform = "translate(-50%, 0)";

  // bombBlast =
}

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
      score = 0;
      sound.play();
      scoreEl.textContent = score;
      img.src = "assets/explode.png";

      gameOver();
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

// HAmmer Code
// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";
// });
// window.addEventListener("mousedown", () => {
//   cursor.classList.add("active");
// });
// window.addEventListener("mouseup", () => {
//   cursor.classList.remove("active");
// });

function resetGame() {
  window.location.reload();
  return false;
}
