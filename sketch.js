var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var a,b,c,d,e
var scene

function preload(){
  a=loadImage("images/car1.png")
  b=loadImage("images/car2.png")
  c=loadImage("images/car3.png")
  d=loadImage("images/car4.png")
  e=loadImage("images/track.jpg")
  scene=loadImage("images/background.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    //clear();
    //form.displayScreen2();
  }
  if (gameState === 2) {
    game.end();
  }

}
