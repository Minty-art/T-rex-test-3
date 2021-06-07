class Game {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
    updateState(){
        database.ref('/').update({
            gameState: state
          });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form();
            form.display();
        player1 = createSprite(400, 200, 40, 40);
        player2 = createSprite(400, 500, 40, 40);
        players = [player1, player2]
        }
    }
    play(){
        form.hide();

        if(allPlayers !== undefined){
          background(rgb(100,100,100));
          //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
          
          
          var index = 0;
    
          
          var x = 175 ;
          var y;
    
          for(var plr in allPlayers){
            
            index = index + 1 ;
    
            
            x = allPlayers[plr].x;
            
            y = y + 100;

            players[index-1].x = x;
            players[index-1].y = y;
           
    
           
            if (index === player.index){
              stroke(10);
              fill("red");
              ellipse(x,y,60,60);
              players[index - 1].shapeColor = "red";
              // camera.position.x = displayWidth/2;
              // camera.position.y = cars[index-1].y;
            }
           
            
          }
        }
        
        if(keyIsDown(UP_ARROW) && player.index !== null){
          players[0,1].y += -10
            
        }
        if(keyIsDown(DOWN_ARROW) && player.index !== null){
          players[0,1].y += 10
            
        }
            // player.update();
          //}
        drawSprites();
        }
    

}