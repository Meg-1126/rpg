//Onload event
window.onload = function () 
{
  // Load music
  let audio = null;
  document.body.addEventListener('click', () => {
    audio = new Audio("sounds/music-title.mp3");
  }, {once: true});

  setInterval(() => {
    if(audio) {
      audio.play();
    }
  }, 1000);

  let startBtn = document.getElementById("btn-start");
  startBtn.addEventListener("click", goToMain);
}

function goToMain () {
  window.location ='main.html';
}


