var database;

var index;

var playerCount;

var allPlayers;

var gameState = 0;

var form, game, player;

var players, player1, player2;

var y = 400;
function preload(){

}


function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    

}


function draw(){
    if(playerCount === 2){
        game.play();
      }
    
}