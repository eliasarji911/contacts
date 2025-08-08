let birdy = 250;
let gravity = 2;
let isgamerunning = false;
let gameloopinterval;

// === DOM Elements ===
const startscreen = document.getElementById("startScreen");
const gamecontainer = document.getElementById("gameContainer");
const bird = document.getElementById("bird");
const upbtn = document.getElementById("upBtn");
const downbtn = document.getElementById("downBtn");
const startbtn = document.getElementById("startBtn");
const gameoverscreen = document.getElementById("gameOverScreen");
const restartbtn = document.getElementById("restartBtn");

// === Start the game ===
function startgame() {
  startscreen.style.display = "none";
  gameoverscreen.style.display = "none";
  birdy = 250;
  bird.style.top = birdy + "px";
  isgamerunning = true;
  gameloopinterval = setInterval(gameloop, 30);
}

// === End the game ===
function gameover() {
  clearInterval(gameloopinterval);
  isgamerunning = false;
  gameoverscreen.style.display = "block";
}

// === Restart the game ===
function restartgame() {
  startgame();
}

// === Bird movement ===
function movebirdup() {
  birdy -= 30;
  updatebirdposition();
}

function movebirddown() {
  birdy += 30;
  updatebirdposition();
}

// === Game loop with gravity ===
function gameloop() {
  birdy += gravity;

  const maxy = gamecontainer.clientHeight - bird.clientHeight;
  if (birdy < 0) birdy = 0;
  if (birdy > maxy) birdy = maxy;

  updatebirdposition();
}

// === Update bird's position ===
function updatebirdposition() {
  bird.style.top = birdy + "px";
}

// === Keyboard control ===
document.addEventListener("keydown", function (event) {
  if (!isgamerunning) return;

  if (event.key === "ArrowUp") {
    movebirdup();
  } else if (event.key === "ArrowDown") {
    movebirddown();
  }
});

// === Button event listeners (optional if using only keyboard) ===
upbtn.addEventListener("click", movebirdup);
downbtn.addEventListener("click", movebirddown);
startbtn.addEventListener("click", startgame);
restartbtn.addEventListener("click", restartgame);




