let ctx;
let encounterRate = 0;
let flower = new Image(); flower.src = "images/img-flowers.png";
let gFrame = 0;//Internal counter
let gMessage = null;
let mainScreen;
let pc = new Image(); pc.src = "images/img-desktop.gif";
let phone = new Image(); phone.src = "images/img-mobile.gif";
let bScreen; // Battle screen

//Object: hero
let hero = new Object();
hero.img = new Image();
hero.img.src = "images/img-hero.gif";
hero.x = 384;
hero.y = 448;
hero.move = 0;

//Image object: mapchip
let mapchip = new Image();
mapchip.src = "images/img-tile.webp";

//Image object: mapchip2
let mapchip2 = new Image();
mapchip2.src = "images/img-tile2.webp";

//Object: Keyboard
let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//Canvas setting
mainScreen = document.getElementById("main");
ctx = mainScreen.getContext("2d");

//Tile map x,y coordinates
let map = [
	[1, 1, 1, 1, 1, 1, 1, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
	[1, 1, 1, 1, 1, 1, 0, 0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
	[1, 1, 1, 1, 1, 0, 0, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
	[1, 1, 1, 1, 0, 0, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
	[1, 1, 1, 0, 0, 1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
	[1, 1, 1, 0, 0, 1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
	[1, 1, 0, 0, 1, 1, 1, 1 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,5 ,8 ,8],
	[1, 1, 0, 0, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 0, 0, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[0, 0, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[0, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,7 ,7 ,7 ,3 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,3 ,7 ,7 ,7 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,7 ,7 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,4 ,8],
	[1, 1, 1, 1, 1, 1, 1, 1 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8 ,8]
];

//Tile map x,y coordinates
let map2 = [
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3],
	[3, 3, 3, 3, 3, 3, 3, 3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3]
];

function DrawTile (image, sx, sy, sw, sh, dx, dy, dw, dh)  // 1tile = 32*32px
{
  for (let y = 0; y < map.length; y++)
  {
    for (let x = 0; x < map[y].length; x++)
    {
      if (map[y][x] === 0) ctx.drawImage(mapchip, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 1) ctx.drawImage(mapchip, 32, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 3) ctx.drawImage(mapchip, 96, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 4) ctx.drawImage(mapchip, 128, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 5) ctx.drawImage(mapchip, 160, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 7) ctx.drawImage(mapchip, 32, 32, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 8) ctx.drawImage(mapchip, 64, 32, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map[y][x] === 9) ctx.drawImage(mapchip, 96, 32, 32, 32, 32 * x, 32 * y, 32, 32);
    }
  }
}

function DrawBattleTile (image, sx, sy, sw, sh, dx, dy, dw, dh)  // 1tile = 32*32px
{
  for (let y = 0; y < map2.length; y++)
  {
    for (let x = 0; x < map2[y].length; x++)
    {
      if (map2[y][x] === 0) ctx.drawImage(mapchip2, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map2[y][x] === 1) ctx.drawImage(mapchip2, 32, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map2[y][x] === 3) ctx.drawImage(mapchip2, 96, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map2[y][x] === 4) ctx.drawImage(mapchip2, 128, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map2[y][x] === 7) ctx.drawImage(mapchip2, 32, 32, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map2[y][x] === 8) ctx.drawImage(mapchip2, 64, 32, 32, 32, 32 * x, 32 * y, 32, 32);
      if (map2[y][x] === 9) ctx.drawImage(mapchip2, 96, 32, 32, 32, 32 * x, 32 * y, 32, 32);
    }
  }
}

function LoadImage ()
{
  //Load images
  ctx.drawImage(pc, 380, 380); //Draw Desktop PC
  ctx.drawImage(phone, 480, 350); //Draw Smartphone
  ctx.drawImage(flower, 70, 60, 45, 32); //Draw flowers
  ctx.drawImage(flower, 40, 40, 45, 32); 
  ctx.drawImage(flower, 100, 60, 45, 32);
  ctx.drawImage(flower, 200, 200, 45, 32);
}

function DrawMessage (ctx)
{
  ctx.fillStyle = "#ffffff"; //For message box
  ctx.fillRect(100,420,400,200); //For message box

  ctx.font = "24px 'Press Start 2P'"; //For text
  ctx.fillStyle = "#000000"; //For text
  ctx.fillText(gMessage, 120,480); //For text
}

function SetMessage (v1) 
{
  gMessage = v1;
}

function Battle () 
{
  window.location ='title.html';
}

 //Hero movement
 function Move(e)
 {
   if (e.keyCode == 37){ //left
    let x = hero.x/32;
    let y = hero.y/32;
    x--;
    if (map[y][x] === 4 || map[y][x] === 3)
    {
      hero.x -= 32;
      if(map[y][x] === 3){
        let choice = window.confirm("Start fighting with Smartphone?");
          if (choice == true)
          {
            alert("Overcome your social media addiction!");
            window.location ='battle.html';
          }
        hero.x +=32;
      }
    }
   }
   if (e.keyCode == 38){ //up
    let x = hero.x/32;
    let y = hero.y/32;
    if (y > 0)
    {
      y--;
      if (map[y][x] === 3 || map[y][x] === 4 || map[y][x] === 5)
      {
        hero.y -= 32;
        if(map[y][x] === 3){
          let choice = window.confirm("Start fighting with Computer?");
          if (choice == true)
          {
            alert("Brush up your coding skills!");
            window.location ='battle.html';
          }
          hero.y +=32;
        }
        if(map[y][x] === 5){
          alert("Stop! You can't escape from this house! Just focus on your study, ok?");
          hero.y +=32;
        }

      }
    }
   }
   if (e.keyCode == 39){ //right
    let x = hero.x/32;
    let y = hero.y/32;
    x++;
    if (map[y][x] === 4 || map[y][x] === 3)
    {
      hero.x += 32;
      if(map[y][x] === 3){
        let choice = window.confirm("Start fighting with Computer?");
          if (choice == true)
          {
            alert("Brush up your coding skills!");
            window.location ='battle.html';
          }
        hero.x -=32;
      }
    }
   }
   if (e.keyCode == 40){ //down
    let x = hero.x/32;
    let y = hero.y/32;
    if (y < 19)
    {
      y++;
      if (map[y][x] === 4 || map[y][x] === 3)
      {
        hero.y += 32;
        if(map[y][x] === 3){
          let choice = window.confirm("Start fighting with Smartphone?");
          if (choice == true)
          {
            alert("Overcome your social media addiction!");
            window.location ='battle.html';
          }
          // Battle();
          hero.y -=32;
        }
      }
    }
   }
   DrawTile();
   LoadImage();
   ctx.drawImage(hero.img, hero.x, hero.y);
 }
 document.onkeydown = Move;

//Onload event
  window.onload = function ()
  {
    // ctx.fillStyle = "rgb(0, 0, 0)";
    // ctx.fillRect(0, 0, 640, 640);
  
    //Load tile map
    DrawTile();  
    // //Load characters
    LoadImage();
    
    // Load Window Message
    // DrawMessage (ctx);

    //Draw hero
    ctx.drawImage(hero.img, hero.x, hero.y);
    
    let x = hero.x/32;
    let y = hero.y/32;
    if(map[y][x] === 3)
    {
      alert("You can't escape from the room!");
    }

   

    // SetMessage("Hi!");
    // setInterval(function(){DrawMessage(ctx)}, 33);

    
  }

    

  

