let HP = 15; //Start HP
let MHP = 15; //Max HP
let LV = 1; //Hero Lv
let enemyHP = 10; //PC HP
let enemyMHP = 10; //PC Max HP
let enemyLV = 2; //PC Lv
let strength = LV * 2; //Attack damage
let damage = 999; //Damage point
let keyInput = 0;
let msgHit = "You hit the enemy! \n" + damage + " damage!" ;
let msgEscape = "Escape failed! Don't get away from studying!";


window.onload = function ()
  {
    //Play audio
     window.addEventListener('DOMContentLoaded', function(){
      const audioElement = document.querySelector("audio");
      audioElement.addEventListener('loadeddata', (e)=> {
      audioElement.muted = true;
      audioElement.autoplay = true;
      });
    });

    //Add HP on status window
    let status = document.getElementById("hp");
    status.innerHTML = '<p id="hp">HP:</p>' + MHP;

  }

  function SelectMenu(e)
 {
  if (e.keyCode == 13) //Enter
  {
    window.location ='endroll.html';
  }

   if (e.keyCode == 38) //Up
   {
    let choice = document.getElementById("command");
    choice.innerHTML = '<p id="attack">>Attack(a)\n Escape(z)</p>';
   }

   if (e.keyCode == 40) //Down
   {
    let choice = document.getElementById("command");
    choice.innerHTML = '<p id="escape">Attack(a)\n>Escape(z)</p>';
   }

   if (e.keyCode === 65) //a
   { 
    let txt = document.getElementById("battle-message");
    txt.remove();
    let txtAttack = document.getElementById("message-window");
    txtAttack.innerHTML = msgHit;
    document.getElementById('gameclear').style.display = 'block';
   }

   if (e.keyCode === 90) //z
   { 
    let txt = document.getElementById("battle-message");
    txt.remove();
    let txtAttack = document.getElementById("message-window");
    txtAttack.innerHTML = msgEscape;
    document.getElementById('gameover').style.display = 'block';
   }


  }
  document.onkeydown = SelectMenu;