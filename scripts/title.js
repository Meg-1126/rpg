//Onload event
window.onload = function () 
{
  // startBGM();
  let startBtn = document.getElementById("btn-start");
  startBtn.addEventListener("click", startBtnSound);
  let timeoutForChangeScreen = setTimeout(goToMain, 8000);
}

function startBtnSound () {
  const audio = new Audio();
  audio.src = "sounds/music-btn-start.mp3";
  audio.play();
}

// function startBGM () {
//   let bgm = document.getElementById("bgm");
//   bgm.muted = true;
//   bgm.play();
// }

function goToMain () {
  // window.location.href='main.html';
  window.location ='main.html';
}


