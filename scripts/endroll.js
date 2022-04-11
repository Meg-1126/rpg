//Play audio
let audio = null;
document.body.addEventListener('click', () => {
  audio = new Audio("sounds/music-endroll.mp3");
}, {once: true});

setInterval(() => {
  if(audio) {
    audio.play();
  }
}, 1000);


let rollText = document.querySelector("#movie-wrapper .text");
    rollText.style.setProperty("bottom" , (rollText.offsetHeight * -1) + "px" , "");


    //Go back to the title
    function GoToTitle(e)
    {
     if (e.keyCode == 13) //Enter
     {
       window.location ='title.html';
     }
    }
    document.onkeydown = GoToTitle;