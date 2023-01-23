const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score");
let score = 0;

var objs = new Array("assets/gopher.png", "assets/bomb.png");

const smash = new Audio("assets/smash.mp3");
const explode = new Audio("assets/explode.wav");

function gameOver() {
  document.getElementById("game").style.filter = "blur(100px)";
  document.getElementById("game").style.backdropFilter = "blur(100px)";

  document.getElementById("homebtns").style.filter = "blur(50px)";
  document.getElementById("homebtns").style.backdropFilter = "blur(50px)";

  document.getElementById("gameover").style.display = "block";
  document.getElementById("gameover").style.zIndex = "1001";
  document.getElementById("gameover").style.position = "fixed";
  document.getElementById("gameover").style.top = "30%";
  document.getElementById("gameover").style.left = "50%";
  document.getElementById("gameover").style.transform = "translate(-50%, 0)";
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

  const min = 199;
  const max = 400;
  const randT = Math.floor(Math.random() * (max - min) + min);

  img.addEventListener("click", () => {
    if (obj[randN] == obj[0]) {
      score += 10;
      smash.play();
      scoreEl.textContent = score;
      img.src = "assets/dead_gopher.png";
    }
    if (obj[randN] == obj[1]) {
      explode.play();
      scoreEl.textContent = score;
      img.src = "assets/explode.png";

      gameOver();
    }
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(img);
      peep();
    }, randT); //changed
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    peep();
  }, 1007); //changed
}

function startGame() {
  peep();
}
function resetGame() {
  window.location.reload();
  peep();
  return false;
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

var now = new Date(); // current date/time
var hrs = now.getHours(); // 0 to 23
var mins = now.getMinutes();
var secs = now.getSeconds();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[now.getDay()];

function shareOntwitter() {
  if (day == "Sunday") {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%201/7.%20%0A%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  } else if (day == "Monday") {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%202/7.%20%0A%E2%AC%9B%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  } else if (day == "Tuesday") {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%203/7.%20%0A%E2%AC%9B%E2%AC%9B%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  } else if (day == "Wednesday") {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%204/7.%20%0A%E2%AC%9B%E2%AC%9B%E2%AC%9B%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%E2%AC%9B%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  } else if (day == "Thursday") {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%205/7.%20%0A%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  } else if (day == "Friday") {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%206/7.%20%0A%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9%F0%9F%9F%A8B%E2%AC%9B%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  } else {
    var url =
      "https://twitter.com/intent/tweet?via=WebiloAgency&text=Scored%20" +
      score +
      "%20points%20in%20Whack%20a%20Gopher%20%23Day%207/7.%20%0A%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%E2%AC%9B%F0%9F%9F%A8%0APlay%20here%3A%20https%3A//whackagopher.online%0A%0A&hashtags=whackagopher%20%23arcade%20%23casual%20%23onlinegame%20%23game%20%23games%20%23universal";
    TwitterWindow = window.open(url);
    return false;
  }
}
