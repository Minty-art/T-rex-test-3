class Form{
    constructor(){
        this.button = createButton('Play')
    }
    hide(){
     
        this.button.hide();
       
      }
    display(){
        this.button.position(400,400)
        this.button.mousePressed(()=>{

            this.button.hide();
            
            playerCount+=1;
            player.index = playerCount;
            // player.update();
            player.updateCount(playerCount);
            
          });
    }
}