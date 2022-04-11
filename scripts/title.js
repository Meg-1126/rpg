//Onload event
window.onload = function () 
{
  let startBtn = document.getElementById("btn-start");
  startBtn.addEventListener("click", startBtnSound);
  startBtn.addEventListener("click", goToMain);
}

function startBtnSound () {
  const audio = new Audio();
  audio.src = "sounds/music-btn-start.mp3";
  audio.play();
}

function goToMain () {
  window.location ='main.html';
}


